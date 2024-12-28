import { CommonBigPKEntity } from "./common/common.entity";
import { ArticleEntity } from "./article.entity";
import { CommentEntity } from "./comment.entity";
export declare class UserEntity extends CommonBigPKEntity {
    email: string;
    password: string;
    articles: ArticleEntity[];
    comments: CommentEntity[];
}
