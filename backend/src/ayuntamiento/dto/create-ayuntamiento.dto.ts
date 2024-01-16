import { IsString } from 'class-validator';

export class CreateAyuntamientoDto {
  @IsString()
  readonly nombre: string;
  @IsString()
  readonly periodo: string;
}
