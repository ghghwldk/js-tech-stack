import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ id: '', question: '', type: 'short', answer: '' });
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [quizzesPerPage] = useState(5); // Number of quizzes per page
    const [randomQuiz, setRandomQuiz] = useState(null); // State for currently displayed random quiz
    const [showAnswers, setShowAnswers] = useState({}); // Track answer visibility for each quiz

    useEffect(() => {
        fetchQuizzes();
    }, [currentPage]); // Re-fetch quizzes when the page changes

    useEffect(() => {
        // Pick a random quiz whenever quizzes are updated
        if (quizzes.length > 0) {
            setRandomQuiz(getRandomQuiz());
        }

        handleRandomQuizChange();
    }, [quizzes]); // Re-run when quizzes change

    const fetchQuizzes = async () => {
        try {
            const response = await axios.get(`/api/quiz/list?page=${currentPage}&limit=${quizzesPerPage}`);
            setQuizzes(response.data);
            // Reset showAnswers state when fetching new quizzes
            const initialVisibility = response.data.reduce((acc, quiz) => {
                acc[quiz.id] = false; // Initially hide all answers
                return acc;
            }, {});
            setShowAnswers(initialVisibility);
        } catch (err) {
            console.error('Error fetching quizzes:', err);
            setError('Failed to load quizzes.');
        }
    };

    const toggleAnswerVisibility = (quizId) => {
        setShowAnswers((prevState) => ({
            ...prevState,
            [quizId]: !prevState[quizId], // Toggle visibility
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        if (!newQuiz.question.trim()) {
            setError('Please write a question.');
            return;
        }

        if (!newQuiz.answer.trim()) {
            setError('Please write an answer.');
            return;
        }

        try {
            await axios.post('/api/quiz', newQuiz);
            await fetchQuizzes(); // Re-fetch quizzes after adding a new one
            setNewQuiz({ id: '', question: '', type: 'short', answer: '' });
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                console.error('Error adding quiz:', err);
            }
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0) {
            setCurrentPage(newPage);
        }
    };

    const getRandomQuiz = async () => {
        try {
            const response = await axios.get(`/api/quiz`); // Use your API endpoint to fetch a random quiz
            return response.data;
        } catch (err) {
            console.error('Error fetching random quiz:', err);
            setError('Failed to load random quiz.');
            return null;
        }
    };

    const handleRandomQuizChange = async () => {
        const newRandomQuiz = await getRandomQuiz(); // Wait for the new quiz to load
        setRandomQuiz(newRandomQuiz); // Update the state with the fetched random quiz
    };


    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'active-tab' : '')}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add-quiz"
                                    className={({ isActive }) => (isActive ? 'active-tab' : '')}
                                >
                                    Add Quiz
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/random-quiz"
                                    className={({ isActive }) => (isActive ? 'active-tab' : '')}
                                >
                                    Random Quiz
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <h1 className="title">Quizlet</h1>

                {error && <p className="error-message">{error}</p>}

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ul className="quiz-list">
                                    {quizzes.map((quiz) => (
                                        <li key={quiz.id} className="quiz-item">
                                            <h3 className="quiz-question">Q{quiz.idx}: {quiz.question}</h3>
                                            {showAnswers[quiz.id] ? (
                                                <p className="correct-answer">A: {quiz.answer}</p>
                                            ) : (
                                                <p className="hidden-answer">A: ******</p>
                                            )}
                                            <button
                                                onClick={() => toggleAnswerVisibility(quiz.id)}
                                                className="toggle-button"
                                            >
                                                {showAnswers[quiz.id] ? 'Hide Answer' : 'Show Answer'}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pagination">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <span>Page {currentPage}</span>
                                    <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/add-quiz"
                        element={
                            <form onSubmit={handleSubmit} className="quiz-form">
                                <input
                                    className="input-field"
                                    type="text"
                                    placeholder="Question"
                                    value={newQuiz.question}
                                    onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })}
                                />

                                <textarea
                                    className="input-field"
                                    placeholder="Correct Answer"
                                    value={newQuiz.answer}
                                    onChange={(e) => setNewQuiz({ ...newQuiz, answer: e.target.value })}
                                />
                                <button type="submit" className="submit-button">Add Quiz</button>
                            </form>
                        }
                    />
                    <Route
                        path="/random-quiz"
                        element={
                            <>
                                {randomQuiz ? (
                                    <div className="random-quiz">
                                        <h2>Random Quiz</h2>
                                        <h3 className="quiz-question">{randomQuiz.question}</h3>
                                        {showAnswers[randomQuiz.id] ? (
                                            <p className="correct-answer">A: {randomQuiz.answer}</p>
                                        ) : (
                                            <p className="hidden-answer">A: ******</p>
                                        )}
                                        <button
                                            onClick={() => toggleAnswerVisibility(randomQuiz.id)}
                                            className="toggle-button"
                                        >
                                            {showAnswers[randomQuiz.id] ? 'Hide Answer' : 'Show Answer'}
                                        </button>
                                        <button onClick={handleRandomQuizChange} className="refresh-button">
                                            Show Another Quiz
                                        </button>
                                    </div>
                                ) : (
                                    <p>No quizzes available.</p>
                                )}
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
