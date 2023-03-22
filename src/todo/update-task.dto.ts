import { IsNotEmpty, IsInt, IsIn } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
