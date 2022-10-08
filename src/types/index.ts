import type { Prisma } from '@prisma/client';

export type ArticleCreateInput = Prisma.ArticleCreateInput;
export type ArticleUpdateInput = Prisma.ArticleUpdateInput &
  Prisma.ArticleWhereUniqueInput;

export type { Article } from '@prisma/client';
