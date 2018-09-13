import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { EstudianteComponent } from './components/administrador/estudiante.component';
import { AdministradorService } from './services/administrador.service';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    EstudianteComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AdministradorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
