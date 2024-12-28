import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(body: any): Promise<{
        content: string;
        userId: string;
        parentId: string;
        articleId: string;
    } & import("../../entities/comment.entity").CommentEntity>;
    updateComment(body: any, id: any): Promise<{
        affected: number;
    }>;
    deleteComment(id: any): Promise<{
        affected: number;
    }>;
}
