import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListagemUsuariosComponent } from './pages/listagem-usuarios/listagem-usuarios.component';
import { UsuarioComponent } from './pages/listagem-usuarios/usuario/usuario.component';
import { ModalFormularioUsuarioComponent } from './pages/listagem-usuarios/modal-formulario-usuario/modal-formulario-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './shared/components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent,
    UsuarioComponent,
    ModalFormularioUsuarioComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
