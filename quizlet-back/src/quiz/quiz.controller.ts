import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Snowflake } from 'nodejs-snowflake';
import { QuizService } from './quiz.service';
import { ParseIntPipe } from '@nestjs/common';

class Quiz {
    id: string;
    idx: number;
    question: string;
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
    getQuizzes(
        @Query('page', ParseIntPipe) page: number = 1, // Default to page 1 if no page is provided
        @Query('limit', ParseIntPipe) limit: number = 5, // Default to 5 quizzes per page if no limit is provided
    ): Quiz[] {
        return this.quizService.getQuizzes(page, limit);
    }

    @Post()
    addQuiz(@Body() quiz: Omit<Quiz, 'id' | 'idx'>): void {
        const id: BigInt = snowflake.getUniqueID(); // Generate a unique ID
        const idx: number = this.quizService.getNextIdx();

        const newQuiz: Quiz = {
            id: id.toString(),
            idx: idx,
            ...quiz,
        };

        this.quizService.addQuiz(newQuiz);
    }
}
