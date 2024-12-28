import { CommentEntity } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<CommentEntity>);
    createComment(content: string, parentId: string, userId: string, articleId: string): Promise<{
        content: string;
        userId: string;
        parentId: string;
        articleId: string;
    } & CommentEntity>;
    modifyComment(commentId: string, userId: string, content: string): Promise<{
        affected: number;
    }>;
    removeComment(commentId: string, userId: string): Promise<{
        affected: number;
    }>;
}
