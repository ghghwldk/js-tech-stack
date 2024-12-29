// Singleton instance to store data
import {Injectable} from "@nestjs/common";

@Injectable()
export class QuizService {
    private quizzes = [];

    getQuizzes() {
        return this.quizzes;
    }

    addQuiz(quiz) {
        this.quizzes.push(quiz);
    }
}