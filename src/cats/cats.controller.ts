import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('cat')
export class CatsController {
  constructor(private prisma: PrismaService) {}
  @Get('list')
  async getList() {
    const result = await this.prisma.cat.findMany();
    return [...result];
  }
}
