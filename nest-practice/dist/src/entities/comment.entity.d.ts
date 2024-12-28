import { CommonBigPKEntity } from "./common/common.entity";
import { UserEntity } from "./user.entity";
import { ArticleEntity } from "./article.entity";
export declare class CommentEntity extends CommonBigPKEntity {
    content: string;
    password: string | null;
    userId: string;
    articleId: string;
    user: UserEntity;
    article: ArticleEntity;
}
