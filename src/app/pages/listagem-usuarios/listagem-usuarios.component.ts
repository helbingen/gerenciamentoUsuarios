import { Component } from '@angular/core';
import { IUsuario } from './models/IUsuario.interface';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent {
  public listaUsuarios: IUsuario[] = [
    {
      idUsuario: 1,
      nomeUsuario: 'Daniel Helbingen',
      dataNascimento: new Date('08/24/1995'),
      classificacao: 'new Member',
    },
    {
      idUsuario: 1,
      nomeUsuario: 'Daniel Helbingen',
      dataNascimento: new Date('08/24/1995'),
      classificacao: 'new Member',
    },
    {
      idUsuario: 1,
      nomeUsuario: 'Daniel Helbingen',
      dataNascimento: new Date('08/24/1995'),
      classificacao: 'new Member',
    },
    {
      idUsuario: 1,
      nomeUsuario: 'Daniel Helbingen',
      dataNascimento: new Date('08/24/1995'),
      classificacao: 'new Member',
    },
  ]
}
