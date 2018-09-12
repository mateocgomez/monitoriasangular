import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { EstudianteComponent } from './components/administrador/estudiante.component';


const app_routes: Routes = [
    { path: 'administrador', component: AdministradorComponent},
    { path: 'estudiante/:id', component: EstudianteComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'administrador'}


];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
