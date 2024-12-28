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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("../../dtos/article/create-article.dto");
const swagger_1 = require("@nestjs/swagger");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async createArticle(body) {
        const userId = "1";
        const title = body.title;
        const content = body.content;
        const article = await this.articleService.createArticle(title, content, userId);
        return article;
    }
    async readArticle(id) {
        const articleId = id;
        const article = await this.articleService.getArticle(articleId);
        return article;
    }
    async updateArticle(id, body) {
        const userId = "1";
        const articleId = id;
        const title = body.title;
        const content = body.content;
        const res = await this.articleService.modifyArticle(userId, articleId, title, content);
        return res;
    }
    async deleteArticle(id) {
        const userId = "1";
        const articleId = id;
        const res = await this.articleService.removeArticle(userId, articleId);
        return res;
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시글 작성 API',
        description: '유저가 게시글을 작성한다.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_article_dto_1.CreateArticleDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "readArticle", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, swagger_1.ApiTags)('게시글 API'),
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map