import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones : string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva : string='';
  paises: Country [] = [];
  constructor( private PaisService: PaisService) { }

  activarRegion(region:string){

    if(region === this.regionActiva){return}

    this.regionActiva = region;
    this.paises =[];
    this.obtenePaises();
  }

  getClaseCss(region:string):string{
    return (region !== this.regionActiva)? 'btn btn-outline-primary': 'btn-primary';
  }

  obtenePaises(){
    this.PaisService.getPaisPorRegion(this.regionActiva)
    .subscribe(paises =>{ this.paises = paises; console.log(paises) })
  }

}
