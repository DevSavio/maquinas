import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaquinasController } from './maquinas/maquinas.controller';
import { MaquinasService } from './maquinas/maquinaService';

@Module({
  imports: [],
  controllers: [AppController, MaquinasController],
  providers: [AppService, MaquinasService],
})
export class AppModule {}
