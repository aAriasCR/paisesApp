import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedroute: ActivatedRoute,
    private PaisService:PaisService
    ) { }

  ngOnInit(): void {


    this.activatedroute.params
      .pipe(
        // switchMap(params => this.PaisService.getPaisPorCodigo(params.id))
        switchMap(({id}) => this.PaisService.getPaisPorCodigo(id)),
        tap( resp => console.log(resp))
      )
      .subscribe( pais =>{
        this.pais = pais;
        
      })


    // this.activatedroute.params
    // .subscribe(
    //   // params =>{
    //   //   this.PaisService.getPaisPorCodigo(params.id)
    //   //   .subscribe( pais => {
    //   //     console.log(pais);
    //   //   })
    //   // }
    //   ({id}) => {
    //     this.PaisService.getPaisPorCodigo(id)
    //     .subscribe( pais => {
    //       console.log(pais);
    //   });
    // });
  }
}
