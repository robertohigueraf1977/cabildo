import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateAyuntamientoDto } from './dto/create-ayuntamiento.dto';
import { UpdateAyuntamientoDto } from './dto/update-ayuntamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ayuntamiento } from './entities/ayuntamiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AyuntamientoService {
  private readonly logger = new Logger('AyuntamientoService');
  constructor(
    @InjectRepository(Ayuntamiento)
    private readonly ayuntamientoRepository: Repository<Ayuntamiento>,
  ) {}

  async create(createAyuntamientoDto: CreateAyuntamientoDto) {
    try {
      const ayuntamiento = this.ayuntamientoRepository.create(
        createAyuntamientoDto,
      );
      await this.ayuntamientoRepository.save(ayuntamiento);
      return ayuntamiento;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Error en el servidor');
    }
  }

  async findAll() {
    try {
      const ayuntamientos = await this.ayuntamientoRepository.find();
      return ayuntamientos;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Error en el servidor');
    }
  }

  async findOne(id: string) {
    try {
      const ayuntamiento = await this.ayuntamientoRepository.findOneBy({ id });
      if (!ayuntamiento) {
        throw new NotFoundException(`Ayuntamiento con id ${id} no encontrado`);
      }
      return ayuntamiento;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Error en el servidor');
    }
  }

  update(id: string, updateAyuntamientoDto: UpdateAyuntamientoDto) {
    return `This action updates a #${id} ayuntamiento`;
  }

  async remove(id: string) {
    try {
      const ayuntamiento = await this.ayuntamientoRepository.findOneBy({ id });
      if (!ayuntamiento) {
        throw new NotFoundException(`Ayuntamiento con id ${id} no encontrado`);
      }
      await this.ayuntamientoRepository.remove(ayuntamiento);
    } catch (error) {
      this.logger.error(error);
      throw new Error('Error en el servidor');
    }
  }
}
