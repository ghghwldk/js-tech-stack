import { Injectable } from '@nestjs/common';
import {QuizEntity} from "../entities/quiz.entity";
import {QuizRepository} from "./quiz.repository";

@Injectable()
export class QuizService {
    private quizRecords: Map<string, QuizEntity> = new Map();
    private randomWindowLength = 10
    // 복습 추천 시간 간격 (분 단위)
    private REVIEW_INTERVALS: number[] = [10, 60, 540, 1440, 10080, 43200]; // 10분, 1시간, 9시간, 1일, 1주, 1개월

    constructor(private readonly quizRepository: QuizRepository) {}

    getRecommended(): QuizEntity{
        const quizzesLength = this.quizRepository.getQuizzesLength()
        const randomWindowLength = quizzesLength > this.randomWindowLength
            ? this.randomWindowLength
            : quizzesLength;

        const randomIndex = Math.floor(Math.random() * randomWindowLength);

        if(randomWindowLength){
            return this.quizRepository.getTopByAccuracy(randomWindowLength)[randomIndex]
        }

        return null
    }

    reflectResult(id: string, isCorrect: boolean): QuizEntity {
        const found: QuizEntity = this.quizRecords.get(id);
        if (!found) {
            console.error(`Quiz ID ${id} not found.`);
            return;
        }

        let result: QuizEntity = undefined
        if(isCorrect){
            result = found.reflectCorrect()
        }else{
            result = found.reflectIncorrect()
        }

        return result
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
