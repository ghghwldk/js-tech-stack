import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ id: '', question: '', type: 'short', answer: '' });
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [quizzesPerPage] = useState(5); // Number of quizzes per page

    useEffect(() => {
        fetchQuizzes();
    }, [currentPage]); // Re-fetch quizzes when the page changes

    const fetchQuizzes = async () => {
        console.log(`Fetching quizzes for page ${currentPage}`); // Debugging log
        try {
            const response = await axios.get(`/api/quizzes?page=${currentPage}&limit=${quizzesPerPage}`);
            console.log('Quizzes fetched:', response.data); // Debugging log
            setQuizzes(response.data);
        } catch (err) {
            console.error('Error fetching quizzes:', err);
            setError('Failed to load quizzes.');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        // Validation: Ensure the question and answer fields are not empty
        if (!newQuiz.question.trim()) {
            setError('Please write a question.');
            return;
        }

        if (!newQuiz.answer.trim()) {
            setError('Please write an answer.');
            return;
        }

        try {
            await axios.post('/api/quizzes', newQuiz);
            fetchQuizzes(); // Re-fetch quizzes after adding a new one
            setNewQuiz({ id: '', question: '', type: 'short', answer: '' });
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                console.error('Error adding quiz:', err);
            }
        }
    };

    // Handler for changing pages
    const handlePageChange = (newPage) => {
        if (newPage > 0) {
            console.log(`Changing to page ${newPage}`); // Debugging log
            setCurrentPage(newPage);
        }
    };

    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/add-quiz">Add Quiz</Link></li>
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
                                    {quizzes.map((quiz, index) => (
                                        <li key={index} className="quiz-item">
                                            <h3 className="quiz-question">Q{quiz.idx}: {quiz.question}</h3>
                                            <p className="correct-answer">A: {quiz.answer}</p>
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
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/add-quiz"
                        element={
                            <form onSubmit={handleSubmit} className="quiz-form" onKeyDown={handleKeyDown}>
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
                </Routes>
            </div>
        </Router>
    );
};

export default App;
