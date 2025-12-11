import {
  Controller,
  Get,
  Post as PostMethod,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Put,
  UsePipes,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, createPostSchema } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { type Response } from 'express';
import { Post } from './entities/post.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import {
  UUIDValidationPipe,
  ValidationPipe,
} from '../pipes/validation/validation.pipe';
import { ValidationErrorDto } from '../pipes/validation/validation.type';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @PostMethod()
  @ApiCreatedResponse({ type: Post })
  @ApiBadRequestResponse({ type: ValidationErrorDto })
  @UsePipes(new ValidationPipe(createPostSchema))
  async create(
    @Body() createPostDto: CreatePostDto,
    @Res() response: Response,
  ) {
    const post = await this.postsService.create(createPostDto);

    if (post) {
      response.status(HttpStatus.CREATED).json(post);

      return;
    }

    response.status(HttpStatus.BAD_REQUEST).send();
  }

  @Get()
  @ApiOkResponse({ type: Post, isArray: true })
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Post })
  async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return await this.postsService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: Post })
  @ApiBadRequestResponse({ type: ValidationErrorDto })
  @UsePipes(new ValidationPipe(createPostSchema))
  async update(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Res() response: Response,
  ) {
    const post = await this.postsService.update(id, updatePostDto);

    if (post) {
      response.status(HttpStatus.CREATED).json(post);

      return;
    }

    response.status(HttpStatus.BAD_REQUEST).send();
  }

  @Delete(':id')
  @ApiNoContentResponse()
  @ApiBadRequestResponse({ type: ValidationErrorDto })
  async remove(
    @Param('id', UUIDValidationPipe) id: string,
    @Res() response: Response,
  ) {
    await this.postsService.remove(id);

    response.status(HttpStatus.NO_CONTENT).send();
  }
}
