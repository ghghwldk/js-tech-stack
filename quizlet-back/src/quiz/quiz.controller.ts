import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Snowflake } from 'nodejs-snowflake';
import { QuizService } from './quiz.service';
import { ParseIntPipe } from '@nestjs/common';
import {QuizEntity} from "../entities/quiz.entity";

// Initialize the Snowflake generator
const snowflake = new Snowflake({
    instance_id: 1, // Adjust the instance ID based on your setup
    custom_epoch: 1672531200000, // Example epoch (Jan 1, 2023)
});

@Controller('/api/quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @Get('/list')
    getQuizzes(
        @Query('page', ParseIntPipe) page: number = 1, // Default to page 1 if no page is provided
        @Query('limit', ParseIntPipe) limit: number = 5, // Default to 5 quizzes per page if no limit is provided
    ): QuizEntity[] {
        return this.quizService.getQuizzes(page, limit);
    }

    @Get()
    getQuiz(): QuizEntity {
        return this.quizService.getRandomQuiz();
    }

    @Post()
    addQuiz(@Body() quiz: Omit<QuizEntity, 'id' | 'idx'>): void {
        const id: BigInt = snowflake.getUniqueID(); // Generate a unique ID
        const idx: number = this.quizService.getNextIdx();

        const newQuiz: QuizEntity = {
            id: id.toString(),
            idx: idx,
            ...quiz,
        };

        this.quizService.addQuiz(newQuiz);
    }
}
