import {addMinutesToCurrentTime} from "../helper/helper.time";

export class QuizEntity {
    id: string;
    idx: number;
    question: string;
    answer: string;
    addedDate: Date;
    correctTime: number;
    totalAppearanceCount: number;
    lastStudyTime: Date;
    requiredStudyTime: Date;

    constructor(id: string, idx: number, question: string, answer: string) {
        this.id = id;
        this.idx = idx;
        this.question = question;
        this.answer = answer;
        this.addedDate = new Date();
        this.lastStudyTime = new Date();
        this.requiredStudyTime = addMinutesToCurrentTime(10)
    }

    getAccuracy(): number{
        return this.correctTime / this.totalAppearanceCount
    }

    updateLastStudyTime(): void{
        this.lastStudyTime = new Date()
    }

    reflectCorrect(): number {
        this.correctTime += 1
        this.totalAppearanceCount += 1
        this.updateLastStudyTime()

        return this.getAccuracy()
    }

    reflectIncorrect(): number {
        this.totalAppearanceCount += 1
        this.updateLastStudyTime()

        return this.getAccuracy()
    }
}