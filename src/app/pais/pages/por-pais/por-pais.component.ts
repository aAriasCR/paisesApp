
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ 
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean= false;
  paises: Country [] = [];
  paisesSugeridos: Country [] = [];
  mostrar: boolean = false;

  constructor(private PaisService:PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrar = false;
    this.PaisService.buscarPais(termino)
    .subscribe( (paises)=> {
      this.paises = paises;
      
    }, (error)=>{
      this.paises.length = 0;
      this.hayError = true;
    });

  }

  sugerencias( termino:string ){
    this.hayError = false;
    this.mostrar = true;
    this.termino = termino;
    this.PaisService.buscarPais(termino)
    .subscribe( (paises)=> this.paisesSugeridos = paises.splice(0,5),
    error => this.paisesSugeridos.length = 0);

  }

  buscarSugerido(termino:string ){
    this.buscar(termino);
    this.mostrar = false;
  }
}


