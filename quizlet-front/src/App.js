import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ question: '', answers: ['', '', '', ''], correctAnswer: 0 });

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        const response = await axios.get('/api/quizzes');
        setQuizzes(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/quizzes', newQuiz);
        fetchQuizzes();
        setNewQuiz({ question: '', answers: ['', '', '', ''], correctAnswer: 0 });
    };

    return (
        <div>
            <h1>Quizlet</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Question"
                    value={newQuiz.question}
                    onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })}
                />
                {newQuiz.answers.map((answer, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Answer ${index + 1}`}
                        value={answer}
                        onChange={(e) => {
                            const answers = [...newQuiz.answers];
                            answers[index] = e.target.value;
                            setNewQuiz({ ...newQuiz, answers });
                        }}
                    />
                ))}
                <input
                    type="number"
                    placeholder="Correct Answer Index"
                    value={newQuiz.correctAnswer}
                    onChange={(e) => setNewQuiz({ ...newQuiz, correctAnswer: Number(e.target.value) })}
                />
                <button type="submit">Add Quiz</button>
            </form>

            <ul>
                {quizzes.map((quiz, index) => (
                    <li key={index}>
                        <h3>{quiz.question}</h3>
                        <ul>
                            {quiz.answers.map((answer, idx) => (
                                <li key={idx}>{answer}</li>
                            ))}
                        </ul>
                        <p>Correct Answer: {quiz.answers[quiz.correctAnswer]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
