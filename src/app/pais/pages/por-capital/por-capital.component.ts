import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean= false;
  paises: Country [] = [];
  constructor(private PaisService:PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital(termino)
    .subscribe( (paises)=> {
      this.paises = paises;
      
    }, (error)=>{
      this.paises.length = 0;
      this.hayError = true;
    });

  }

  sugerencias( termino:string ){
    this.hayError = false
  }


}
