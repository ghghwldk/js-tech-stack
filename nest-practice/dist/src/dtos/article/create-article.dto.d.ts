import { ArticleEntity } from 'src/entities/article.entity';
declare const CreateArticleDto_base: import("@nestjs/common").Type<Pick<ArticleEntity, "content" | "title">>;
export declare class CreateArticleDto extends CreateArticleDto_base {
}
export {};
