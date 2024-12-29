// Singleton instance to store data
import {Injectable} from "@nestjs/common";

@Injectable()
export class QuizService {
    private quizzes = [];
    private currentIdx: number = 0;

    getQuizzes() {
        return this.quizzes;
    }

    getNextIdx(): number{
        return ++ this.currentIdx;
    }

    addQuiz(quiz) {
        this.quizzes.push(quiz);
        console.log(quiz.length);
    }
}