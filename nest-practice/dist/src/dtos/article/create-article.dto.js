"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const article_entity_1 = require("../../entities/article.entity");
class CreateArticleDto extends (0, swagger_1.PickType)(article_entity_1.ArticleEntity, [
    'title',
    'content',
]) {
}
exports.CreateArticleDto = CreateArticleDto;
//# sourceMappingURL=create-article.dto.js.map