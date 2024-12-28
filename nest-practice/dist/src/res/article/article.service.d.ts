import { ArticleEntity } from 'src/entities/article.entity';
import { Repository } from 'typeorm';
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: Repository<ArticleEntity>);
    createArticle(title: string, content: string, userId: string): Promise<{
        title: string;
        content: string;
        userId: string;
    } & ArticleEntity>;
    getArticle(articleId: string): Promise<ArticleEntity>;
    modifyArticle(userId: string, articleId: string, title: string, content: string): Promise<{
        affected: number;
    }>;
    removeArticle(userId: string, articleId: string): Promise<{
        affected: number;
    }>;
}
