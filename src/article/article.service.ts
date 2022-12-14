import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Article, ArticleCreateInput, ArticleUpdateInput } from '../types';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(createInput: ArticleCreateInput): Promise<Article> {
    const res = await this.prisma.article.create({
      data: createInput,
    });

    return res;
  }

  async update(updateInput: ArticleUpdateInput): Promise<Article> {
    const res = await this.prisma.article.update({
      data: updateInput,
      where: {
        id: updateInput.id,
      },
    });

    return res;
  }

  async query(): Promise<Article[]> {
    const res = await this.prisma.article.findMany();
    return res;
  }
}
