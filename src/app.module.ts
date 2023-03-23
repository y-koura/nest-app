import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from './prisma/prisma.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController, CatsController],
  providers: [AppService, PrismaService, CatsService],
})
export class AppModule {}
