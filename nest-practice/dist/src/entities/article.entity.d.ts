import { CommentEntity } from './comment.entity';
import { CommonBigPKEntity } from './common/common.entity';
import { UserEntity } from './user.entity';
export declare class ArticleEntity extends CommonBigPKEntity {
    title: string;
    content: string;
    userId: string;
    user: UserEntity;
    comments: CommentEntity[];
}
