import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
      img {
        width:50px;
        height:auto;
        object-fit: contain;
      }
    
      .poblacion {
        text-align: right;
      }
    `
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
