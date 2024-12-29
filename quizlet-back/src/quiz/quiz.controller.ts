import {Body, Controller, Get, Post} from "@nestjs/common";
import { QuizService } from './quiz.service';

@Controller('/api/quizzes')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @Get()
    getQuizzes() {
        return this.quizService.getQuizzes();
    }

    @Post()
    addQuiz(@Body() quiz: { question: string; answers: string[]; correctAnswer: number }) {
        this.quizService.addQuiz(quiz);
        return { message: 'Quiz added successfully' };
    }
}