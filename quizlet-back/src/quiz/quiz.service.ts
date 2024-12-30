import { Injectable } from '@nestjs/common';
import {QuizEntity} from "../entities/quiz.entity";
import {QuizRepository} from "./quiz.repository";

@Injectable()
export class QuizService {
    constructor(private readonly quizRepository: QuizRepository) {}

    getRandomQuiz(): QuizEntity{
        const quizzesLength = this.quizRepository.getQuizzesLength()
        const randomIndex = Math.floor(Math.random() * quizzesLength);

        if(quizzesLength){
            return this.quizRepository.getQuiz(randomIndex)
        }

        return null
    }

    getQuizzes(page: number, limit: number): QuizEntity[] {
        const start: number = (page - 1) * limit;
        const end: number = start + limit;

        return this.quizRepository.getSliced(start, end)
    }

    addQuiz(newQuiz: QuizEntity): void {
        this.quizRepository.addQuiz(newQuiz)
    }

    getNextIdx(): number {
        return this.quizRepository.getMaxIdx() + 1
    }
}
