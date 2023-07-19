import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Rutas[] = [
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Loja",
      Precio_Ruta: "10.00",
      img:"assets/img/bus.png",
      Descripcion: "La ruta entre Machala y Loja es un viaje terrestre en Ecuador que recorre una distancia considerable entre dos ciudades importantes.",
      Tipo:"interno"
    },
    {
      Ciudad_Origen: "Guayaquil",
      Ciudad_Destino: "Loja",
      Precio_Ruta: "12.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Guayaquil a Loja",
      Tipo:"Externo"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Huaquillas",
      Precio_Ruta: "3.50",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Huaquillas",
      Tipo:"Interno"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Zaruma",
      Precio_Ruta: "5.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Zaruma",
      Tipo:"Externo"
    },
    {
      Ciudad_Origen: "Zaruma",
      Ciudad_Destino: "Loja",
      Precio_Ruta: "5.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Zaruma a Loja",
      Tipo:"Interno"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Quito",
      Precio_Ruta: "15.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Quito",
      Tipo:"Interno"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Pasaje",
      Precio_Ruta: "7.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Pasaje",
      Tipo:"Externo"
    },
    {
      Ciudad_Origen: "Cuenca",
      Ciudad_Destino: "Manabi",
      Precio_Ruta: "10.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Manabi",
      Tipo:"Externo"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Santa Rosa",
      Precio_Ruta: "12.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Santa Rosa",
      Tipo:"Interno"
    },
    {
      Ciudad_Origen: "Machala",
      Ciudad_Destino: "Cuenca",
      Precio_Ruta: "7.00",
      img:"assets/img/bus.png",
      Descripcion: "Este bus tiene de ruta de Machala a Cuenca",
      Tipo:"Externo"
    }

  ];

  getHeroes (){
    return this.heroes;
  }
  constructor() { 
    console.log("Servicio listo para usar...");
  }
  getHeroe(idx:number):Rutas {
    return this.heroes[idx];
  }

  buscarH(dato:string) : Rutas[] {
    let heroesArr:Rutas[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.Ciudad_Origen.toLocaleLowerCase();
      if(nombre.indexOf(dato) >= 0) {
        heroe.ident = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}

export interface Rutas{
  Ciudad_Origen: string;
  Ciudad_Destino: string;
  Precio_Ruta: string;
  img: string;
  Descripcion: string;
  Tipo: string;
  ident?:number;
}