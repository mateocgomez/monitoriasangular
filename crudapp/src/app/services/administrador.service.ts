import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Estudiante } from '../interfaces/estudiante.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  estudianteUrl = 'https://monitoriasapp.firebaseio.com/Administrador.json';
  actualizarUrl = 'https://monitoriasapp.firebaseio.com/Administrador/';

  constructor( private http: Http ) { }
actualizarEstudiante (estudiante: Estudiante, key$: string){
  const body = JSON.stringify(estudiante);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  const url = `${this.actualizarUrl}/${key$}.json`;
      return this.http.put ( url, body, { headers } )
                .pipe(map(res => {
                    console.log(res.json());
                    return res.json();
                }));
}

getEstudiante (key$: string) {
  const url = `${this.actualizarUrl}/${key$}.json`;
  return this.http.get (url )
  .pipe(map(res => res.json()));
}

getAdministrador( ) {
  return this.http.get ( this.estudianteUrl )
  .pipe(map(res => res.json()));
}

borrarEstudiante(key$: string) {
  const url = `${this.actualizarUrl}/${key$}.json`;
  return this.http.delete(url).pipe(map(res => res.json()));
}

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
