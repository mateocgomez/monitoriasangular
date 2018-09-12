import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Estudiante } from '../interfaces/estudiante.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  estudianteUrl = 'https://monitoriasapp.firebaseio.com/Administrador.json';

  constructor( private http: Http ) { }
    nuevoEstudiante( estudiante: Estudiante ) {

      const body = JSON.stringify(estudiante);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.post ( this.estudianteUrl, body, { headers } )
                .pipe(map(res => {
                    console.log(res.json());
                    return res.json();

                }));

    }}
