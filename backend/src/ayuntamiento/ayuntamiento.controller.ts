import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { AyuntamientoService } from './ayuntamiento.service';
import { CreateAyuntamientoDto } from './dto/create-ayuntamiento.dto';
import { UpdateAyuntamientoDto } from './dto/update-ayuntamiento.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('ayuntamientos')
export class AyuntamientoController {
  constructor(private readonly ayuntamientoService: AyuntamientoService) {}

  @Post()
  create(@Body() createAyuntamientoDto: CreateAyuntamientoDto) {
    return this.ayuntamientoService.create(createAyuntamientoDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.ayuntamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ayuntamientoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAyuntamientoDto: UpdateAyuntamientoDto,
  ) {
    return this.ayuntamientoService.update(id, updateAyuntamientoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ayuntamientoService.remove(id);
  }
}
