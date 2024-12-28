import { ArticleService } from './article.service';
import { CreateArticleDto } from "../../dtos/article/create-article.dto";
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    createArticle(body: CreateArticleDto): Promise<{
        title: string;
        content: string;
        userId: string;
    } & import("../../entities/article.entity").ArticleEntity>;
    readArticle(id: any): Promise<import("../../entities/article.entity").ArticleEntity>;
    updateArticle(id: any, body: any): Promise<{
        affected: number;
    }>;
    deleteArticle(id: any): Promise<{
        affected: number;
    }>;
}
