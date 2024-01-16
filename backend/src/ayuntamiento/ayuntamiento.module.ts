import { Module } from '@nestjs/common';
import { AyuntamientoService } from './ayuntamiento.service';
import { AyuntamientoController } from './ayuntamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ayuntamiento } from './entities/ayuntamiento.entity';

@Module({
  controllers: [AyuntamientoController],
  providers: [AyuntamientoService],
  imports: [TypeOrmModule.forFeature([Ayuntamiento])],
})
export class AyuntamientoModule {}
