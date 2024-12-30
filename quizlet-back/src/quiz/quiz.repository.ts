import { Injectable } from '@nestjs/common';
import {QuizEntity} from "../entities/quiz.entity";

@Injectable()
export class QuizRepository {
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
                `Answer ${idx + 1}`
            );
            return quiz;
        });
        this.quizzes = defaultQuizzes;
    }

    getQuizzes(maxDate): QuizEntity[] {
        return this.quizzes.filter(e => e.requiredStudyTime <= maxDate);
    }

    getQuizzesLength(): number{
        return this.quizzes.length
    }

    getSliced(start, end):QuizEntity[]{
        return this.quizzes.slice(start, end); // Return the paginated quizzes
    }

    getQuiz(idx: number):QuizEntity{
        if(this.quizzes.length > 0){
            return this.quizzes[idx];
        }

        return null;
    }

    // Add a new quiz
    addQuiz(newQuiz: QuizEntity): void {
        this.quizzes.push(newQuiz);
    }

    // Get the maximum idx from the quizzes array
    getMaxIdx(): number {
        if (this.quizzes.length === 0) {
            return 0; // If no quizzes exist, return 0
        }
        return Math.max(...this.quizzes.map(quiz => quiz.idx)); // Get the max idx from quizzes
    }

    private sortByLastStudyTime(entities: QuizEntity[]): QuizEntity[] {
        return entities.sort((a, b) =>
            new Date(b.lastStudyTime).getTime() - new Date(a.lastStudyTime).getTime()
        );
    }

    getTopByAccuracy(top){
        return this.quizzes
            .sort((a, b) =>b.getAccuracy() - a.getAccuracy())
            .slice(top);
    }
}
