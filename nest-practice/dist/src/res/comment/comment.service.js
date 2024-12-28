"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("../../entities/comment.entity");
const typeorm_2 = require("typeorm");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async createComment(content, parentId, userId, articleId) {
        const comment = await this.commentRepository.save({
            content: content,
            userId: userId,
            parentId: parentId,
            articleId: articleId,
        });
        return comment;
    }
    async modifyComment(commentId, userId, content) {
        const comment = await this.commentRepository.findOne({
            where: {
                id: commentId,
                userId: userId,
            },
        });
        if (!comment) {
            throw new common_1.UnauthorizedException('본인의 댓글이 아닙니다.');
        }
        const updateResult = await this.commentRepository.update({ id: commentId }, { content: content });
        return { affected: updateResult?.affected };
    }
    async removeComment(commentId, userId) {
        const deleteResult = await this.commentRepository.softDelete({
            id: commentId,
            userId: userId,
        });
        return { affected: deleteResult?.affected };
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentService);
//# sourceMappingURL=comment.service.js.map