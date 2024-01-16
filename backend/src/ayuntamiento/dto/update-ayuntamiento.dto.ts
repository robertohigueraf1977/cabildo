import { PartialType } from '@nestjs/mapped-types';
import { CreateAyuntamientoDto } from './create-ayuntamiento.dto';

export class UpdateAyuntamientoDto extends PartialType(CreateAyuntamientoDto) {}
