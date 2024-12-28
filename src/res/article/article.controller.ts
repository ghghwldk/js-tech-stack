import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {


    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async createArticle(@Body() body){
        const title = body.title
        const content = body.content
        const userId = "1" // Guard로 받아 올 수 있다.

        const article = await this.articleService.createArticle(
            title,
            content,
            userId
        )
    }

    @Get('/:id')
    async readArticle(@Param('id') id){
        const articleId = id

        const article
            = await this.articleService.getArticle(articleId);

        return article;
    }

    // @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateArticle(
        @Param('id') id,
        // @User() user,
        @Body() body
    ) {
        const userId = "1";
        const articleId = id;

        const title = body.title;
        const content = body.content;

        const res = await this.articleService.modifyArticle(
            userId,
            articleId,
            title,
            content,
        );

        return res;
    }

    // @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async deleteArticle(
        @Param('id') id,
        // @User() user
    ) {
        const userId = "1";
        const articleId = id;

        const res = await this.articleService.removeArticle(userId, articleId);

        return res;
    }
}