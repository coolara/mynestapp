import { Module } from '@nestjs/common';
import PrismaModule from './prisma/prisma.module';
import { SeedController } from './article/seed.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [PrismaModule],
  controllers: [SeedController],
  providers: [ArticleService],
})
export class AppModule {}
