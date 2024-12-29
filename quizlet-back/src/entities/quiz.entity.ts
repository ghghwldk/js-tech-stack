export class QuizEntity {
    id: string;
    idx: number;
    question: string;
    answer: string;
    difficulty: number;
    addedDate: string;
    correct: boolean;

    constructor(id: string, idx: number, question: string, answer: string, addedDate: string = '') {
        const defaultDifficulty = 3

        this.question = question;
        this.answer = answer;
        this.difficulty = defaultDifficulty;
        this.addedDate = addedDate; // Date when the question was added
        this.correct = null; // Track if the question was answered correctly
    }

    markCorrect(): void {
        this.correct = true;
        this.difficulty -= 1; // Decrease difficulty for correct answers
    }

    markIncorrect(): void {
        this.correct = false;
        this.difficulty += 1; // Increase difficulty for incorrect answers
    }

    flip(): void {
        // Flip the question (reverse order or orientation)
        // Implement logic for flipping here if needed
    }

    resetForNew(): void {
        this.difficulty = -3; // New questions start with a penalty
        this.correct = null; // Reset correctness status
    }
}