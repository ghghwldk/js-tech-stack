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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("./common/common.entity");
const user_entity_1 = require("./user.entity");
const article_entity_1 = require("./article.entity");
let CommentEntity = class CommentEntity extends common_entity_1.CommonBigPKEntity {
};
exports.CommentEntity = CommentEntity;
__decorate([
    (0, typeorm_1.Column)('text', { unique: false, nullable: false }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { unique: false, nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { unique: false, nullable: false }),
    __metadata("design:type", String)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { unique: false, nullable: false }),
    __metadata("design:type", String)
], CommentEntity.prototype, "articleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => article_entity_1.ArticleEntity, (article) => article.comments),
    (0, typeorm_1.JoinColumn)({ name: 'articleId', referencedColumnName: 'id' }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], CommentEntity.prototype, "article", void 0);
exports.CommentEntity = CommentEntity = __decorate([
    (0, typeorm_1.Entity)('Comment')
], CommentEntity);
//# sourceMappingURL=comment.entity.js.map