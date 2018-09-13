import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { AdministradorService } from '../../services/administrador.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styles: []
})
export class EstudianteComponent implements OnInit {

  estudiante: any = {
    carnet: '',
    nombre: '',
    carrera: '',
    monitoria: '',
    promedio: ''

  };

  nuevo:boolean = false;
  id: string;

  constructor(private _administradorService: AdministradorService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params
                  .subscribe( parametros =>
                    this.id = parametros['id'] );
               }

  ngOnInit() {
  }

  guardar() {
    console.log(this.estudiante);

    if (this.id === 'nuevo' ) {
      // insertando
      this._administradorService.nuevoEstudiante(this.estudiante)
      .subscribe ( data => {
        this.router.navigate(['/estudiante', data.name]);
      }, error => console.error(error));
    } else {
      // actualizando
      this._administradorService.actualizarEstudiante(this.estudiante, this.id )
      .subscribe ( data => {
        console.log(data);
      }, error => console.error(error));
    }


  }

}
