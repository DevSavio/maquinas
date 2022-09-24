/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Maquinas } from './maquinas';

  @Injectable()
  export class MaquinasService{

    private maquinas: Maquinas[] = [];
    maquinaService: any;

    constructor() {
        let m1:Maquinas = new Maquinas();
      m1.descricao = "Implemento Agricola Para Horta Para Tratorito Diesel Eh700";
      m1.anoFabricacao = 2020;
      this.maquinas.push(m1);

      let m2:Maquinas = new Maquinas();
      m2.descricao = "Motocultivador Diesel 10cv Husqvarna Tf545de Partida Eletric";
      m2.anoFabricacao = 2022;
      this.maquinas.push(m2);

      let m3:Maquinas = new Maquinas();
      m3.descricao = "Plantadeira E Adubadora - Allagri - Ag60 - Diversas Sementes";
      m3.anoFabricacao = 2022;
      this.maquinas.push(m3);

      let m4:Maquinas = new Maquinas();
      m4.descricao = "Picador Triturador Ensiladeira Agrícola A Diesel 13,5hp Ed1";
      m4.anoFabricacao = 2020;
      this.maquinas.push(m4);

      let m5:Maquinas = new Maquinas();
      m5.descricao = "Rabeta Vertical Kawashima Motor A Gasolina 6,0 Cv Branco";
      m5.anoFabricacao = 2019;
      this.maquinas.push(m5);

      let m6:Maquinas = new Maquinas();
      m6.descricao = "Colheitadeira John Deere Slc 7500";
      m6.anoFabricacao = 1996;
      this.maquinas.push(m6);

      let m7:Maquinas = new Maquinas();
      m7.descricao = "Colheitadeira Jd S550";
      m7.anoFabricacao = 2014;
      this.maquinas.push(m7);

      let m8:Maquinas = new Maquinas();
      m8.descricao = "Colhedeira Case 5130";
      m8.anoFabricacao = 2020;
      this.maquinas.push(m8);

      let m9:Maquinas = new Maquinas();
      m9.descricao = "Colheitadeira Case 8250 Automation";
      m9.anoFabricacao = 2021;
      this.maquinas.push(m9);

      let m10:Maquinas = new Maquinas();
      m10.descricao = "Pulverizador John Deere M 4030";
      m10.anoFabricacao = 2020;
      this.maquinas.push(m10);

    }

    salvar(maquina:Maquinas){
      this.maquinas.push(maquina);
    }

    showMaquinas(): Maquinas[]{
      return this.maquinas;
    }

    delete(id:number) {
    const index = this.maquinaService.findIndex((value) => value.id == id);
    this.maquinaService.splice(index, 1);
  }
}
