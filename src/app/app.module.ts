import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ListagemUsuariosComponent } from './pages/listagem-usuarios/listagem-usuarios.component';
import { UsuarioComponent } from './pages/listagem-usuarios/usuario/usuario.component';
import { ModalFormularioUsuarioComponent } from './pages/listagem-usuarios/modal-formulario-usuario/modal-formulario-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './shared/components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { InputModule } from './shared/components/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent,
    UsuarioComponent,
    ModalFormularioUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbTooltipModule,
    HttpClientModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
