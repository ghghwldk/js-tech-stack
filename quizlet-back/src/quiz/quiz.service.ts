import { Injectable } from '@nestjs/common';

interface Quiz {
    id: string;
    idx: number;
    question: string;
    answer: string;
}

@Injectable()
export class QuizService {
    private quizzes: Quiz[] = []; // This would normally be a database call


    constructor() {
        // Set the default quizzes when the service is initialized
        this.initializeDefaultQuizzes();
    }

    // Initialize 21 default quizzes
    private initializeDefaultQuizzes() {
        const defaultQuizzes = Array.from({ length: 21 }, (_, idx) => ({
            id: (idx + 1).toString(),
            idx: idx + 1,
            question: `Question ${idx + 1}`,
            answer: `Answer ${idx + 1}`,
        }));
        this.quizzes = defaultQuizzes;
    }

    // Get quizzes with pagination
    getQuizzes(page: number, limit: number): Quiz[] {
        const start: number = (page - 1) * limit;
        const end: number = start + limit;
        return this.quizzes.slice(start, end); // Return the paginated quizzes
    }

    // Add a new quiz
    addQuiz(newQuiz: Quiz): void {
        this.quizzes.push(newQuiz);
    }

    // Get the next index for a new quiz
    getNextIdx(): number {
        return this.quizzes.length + 1;
    }

    // Get the maximum idx from the quizzes array
    getMaxIdx(): number {
        if (this.quizzes.length === 0) {
            return 0; // If no quizzes exist, return 0
        }
        return Math.max(...this.quizzes.map(quiz => quiz.idx)); // Get the max idx from quizzes
    }
}
