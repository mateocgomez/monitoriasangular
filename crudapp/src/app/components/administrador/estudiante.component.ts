import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { AdministradorService } from '../../services/administrador.service';

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


  constructor(private _administradorService: AdministradorService) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.estudiante);
    this._administradorService.nuevoEstudiante(this.estudiante)
          .subscribe ( data => { } );
  }

}
