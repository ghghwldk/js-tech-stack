import { Controller, Get, Post, Body } from '@nestjs/common';
import { Snowflake } from 'nodejs-snowflake';
import {AppService} from "../app.service";
import {QuizService} from "./quiz.service";

class Quiz {
    id: string;
    idx: number;
    question: string;
    // type: 'short' | 'long';
    answer: string;
}

// Initialize the Snowflake generator
const snowflake = new Snowflake({
    instance_id: 1, // Adjust the instance ID based on your setup
    custom_epoch: 1672531200000, // Example epoch (Jan 1, 2023)
});


@Controller('/api/quizzes')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @Get()
    getQuizzes(): Quiz[] {
        return this.quizService.getQuizzes();
    }

    @Post()
    addQuiz(@Body() quiz: Omit<Quiz, 'id' | 'idx'>): void {
        const id: BigInt = snowflake.getUniqueID(); // Generate a unique ID
        const idx: number = this.quizService.getNextIdx()

        const newQuiz: Quiz = {
            id: id.toString(),
            idx: idx,
            ...quiz,
        };

        this.quizService.addQuiz(newQuiz);
    }
}
