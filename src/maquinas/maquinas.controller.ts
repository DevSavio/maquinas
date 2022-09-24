/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MaquinasService } from './maquinaService';
import { Maquinas } from './maquinas';

@Controller('maquinas')
export class MaquinasController {

  constructor(private maquinaService: MaquinasService){
    
  }

  @Get()
  getMaquinas(): Maquinas []{
    return this.maquinaService.showMaquinas();
  }

  @Post()
  save(@Body() maquina: Maquinas){
    this.maquinaService.salvar(maquina);
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    this.maquinaService.delete(id);
  }
    
}
