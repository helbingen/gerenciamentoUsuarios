import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuariosComponent } from './pages/listagem-usuarios/listagem-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemUsuariosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
