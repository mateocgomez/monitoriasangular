import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styles: []
})
export class AdministradorComponent implements OnInit {

  administrador: any[] = [];

  constructor( private _AdministradorService: AdministradorService ) {
    this._AdministradorService.getAdministrador()
        .subscribe( data => {
          this.administrador = data;
        });
  }

  ngOnInit() {
  }

  borrarEstudiante(key$: string) {
    this._AdministradorService.borrarEstudiante(key$)
    .subscribe( respuesta => {
      if (respuesta) {
        console.error(respuesta);
      } else {
        delete this.administrador[key$];
      }
    });
  }

}
