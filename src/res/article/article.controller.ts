import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { ArticleService } from './article.service';
import {CreateArticleDto} from "../../dtos/article/create-article.dto";
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('게시글 API')     // ApiTag를 통해 Article Controller가 무슨 역할을 하는지 태그를 달아줍니다.
@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @ApiOperation({
        summary: '게시글 작성 API',
        description: '유저가 게시글을 작성한다.',
    })
    @ApiBody({
        type: CreateArticleDto,
    })
    // ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post()
    async createArticle(@Body() body: CreateArticleDto,
                        // @User() user
    ) {
        // const userId = user.id;
        const userId = "1"

        const title = body.title;
        const content = body.content;

        const article = await this.articleService.createArticle(
            title,
            content,
            userId,
        );

        return article;
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