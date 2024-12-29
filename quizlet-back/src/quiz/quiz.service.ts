import { Injectable } from '@nestjs/common';
import {QuizEntity} from "../entities/quiz.entity";

// interface QuizEntity {
//     id: string;
//     idx: number;
//     question: string;
//     answer: string;
//     difficulty: number,
//     addedDate: string,
// }



@Injectable()
export class QuizService {
    private quizzes: QuizEntity[] = []; // This would normally be a database call


    constructor() {
        // Set the default quizzes when the service is initialized
        this.initializeDefaultQuizzes();
    }

    private initializeDefaultQuizzes(): void {
        const defaultQuizzes = Array.from({ length: 21 }, (_, idx) => {
            const quiz = new QuizEntity(
                (idx + 1).toString(),
                idx + 1,
                `Question ${idx + 1}`,
                `Answer ${idx + 1}`,
                new Date().toLocaleDateString()
            );
            return quiz;
        });
        this.quizzes = defaultQuizzes;
    }

    // Get quizzes with pagination
    getQuizzes(page: number, limit: number): QuizEntity[] {
        const start: number = (page - 1) * limit;
        const end: number = start + limit;
        return this.quizzes.slice(start, end); // Return the paginated quizzes
    }

    // Add a new quiz
    addQuiz(newQuiz: QuizEntity): void {
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

    // Function to query questions by difficulty range
    queryQuestionsByDifficulty(questions: QuizEntity[], minDifficulty: number, maxDifficulty: number): QuizEntity[] {
        return questions.filter(q => q.difficulty >= minDifficulty && q.difficulty <= maxDifficulty);
    }

    // Function to sort incorrect answers by the most recent date
    sortIncorrectAnswersByDate(incorrectAnswers: QuizEntity[]): QuizEntity[] {
        return incorrectAnswers.sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime());
    }
}
