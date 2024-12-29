import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Add a CSS file for styling

const App = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ id: '', question: '', type: 'short', answer: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        try {
            const response = await axios.get('/api/quizzes');
            setQuizzes(response.data);
        } catch (err) {
            console.error("Error fetching quizzes:", err);
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

        // Validation: Ensure the question field is not empty
        if (!newQuiz.question.trim()) {
            setError('Please write a question.');
            return;
        }

        if (!newQuiz.answer.trim()) {
            setError('Please write a answer.');
            return;
        }

        try {
            await axios.post('/api/quizzes', newQuiz);
            fetchQuizzes();
            setNewQuiz({ id: '', question: '', type: 'short', answer: '' });
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                console.error("Error adding quiz:", err);
            }
        }
    };

    return (
        <div className="app-container">
            <h1 className="title">Quizlet</h1>

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="quiz-form" onKeyDown={handleKeyDown}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Question"
                    value={newQuiz.question}
                    onChange={(e) => setNewQuiz({...newQuiz, question: e.target.value})}
                />

                <textarea
                    className="input-field"
                    placeholder="Correct Answer"
                    value={newQuiz.answer}
                    onChange={(e) => setNewQuiz({...newQuiz, answer: e.target.value})}
                />
                <button type="submit" className="submit-button">Add Quiz</button>
            </form>

            <ul className="quiz-list">
                {quizzes.map((quiz, index) => (
                    <li key={index} className="quiz-item">
                        <h3 className="quiz-question">Q{quiz.idx}: {quiz.question}</h3>
                        <p className="correct-answer">A: {quiz.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
