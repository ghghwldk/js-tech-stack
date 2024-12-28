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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const common_entity_1 = require("./common/common.entity");
const user_entity_1 = require("./user.entity");
const swagger_1 = require("@nestjs/swagger");
let ArticleEntity = class ArticleEntity extends common_entity_1.CommonBigPKEntity {
};
exports.ArticleEntity = ArticleEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '게시글 제목입니다.',
        description: '게시글 제목',
        required: true,
    }),
    (0, typeorm_1.Column)('varchar', { unique: false, nullable: false }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '게시글 내용입니다.',
        description: '게시글 내용',
        required: true,
    }),
    (0, typeorm_1.Column)('text', { unique: false, nullable: false }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { unique: false, nullable: false }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.articles),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.article),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "comments", void 0);
exports.ArticleEntity = ArticleEntity = __decorate([
    (0, typeorm_1.Entity)('Article')
], ArticleEntity);
//# sourceMappingURL=article.entity.js.map