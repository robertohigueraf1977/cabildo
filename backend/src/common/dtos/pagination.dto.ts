import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  @Transform((limit) => Number(limit))
  limit?: number;

  @IsOptional()
  @IsPositive()
  @IsInt()
  @Transform(() => Number)
  offset?: number;
}
