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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("../../entities/article.entity");
const typeorm_2 = require("typeorm");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async createArticle(title, content, userId) {
        const article = await this.articleRepository.save({
            title: title,
            content: content,
            userId: userId,
        });
        return article;
    }
    async getArticle(articleId) {
        const article = await this.articleRepository.findOne({
            where: {
                id: articleId,
            },
            relations: {
                comments: true,
            },
        });
        return article;
    }
    async modifyArticle(userId, articleId, title, content) {
        const article = await this.articleRepository.findOne({
            where: {
                id: articleId,
                userId: userId,
            },
        });
        if (!article) {
            throw new common_1.UnauthorizedException('본인의 게시글이 아닙니다.');
        }
        const updateResult = await this.articleRepository.update({ id: articleId }, {
            title: title,
            content: content,
        });
        return { affected: updateResult?.affected };
    }
    async removeArticle(userId, articleId) {
        const deleteResult = await this.articleRepository.softDelete({
            id: articleId,
            userId: userId,
        });
        return { affected: deleteResult?.affected };
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.ArticleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
//# sourceMappingURL=article.service.js.map