import { Component } from '@angular/core';
import { IUsuario } from './models/IUsuario.interface';
import { v4 as uuidv4 } from 'uuid';
import { HttpService } from 'src/app/services/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormularioUsuarioComponent } from './modal-formulario-usuario/modal-formulario-usuario.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent {

  constructor(public httpService: HttpService, private ngbModal: NgbModal, private toastr: ToastrService) { }

  private ngOnInit(): void {
    this.listarUsuarios();
  }

  private async listarUsuarios(): Promise<void> {
    this.listaUsuarios = await this.httpService.listarUsuarios();
  }

  public listaUsuarios: IUsuario[] = [
    {
      nomeUsuario: 'Luara Burgos de Quintana',
      dataNascimento: new Date('08/24/1995'),
      classificacao: 'Professora',
    },
    {
      nomeUsuario: 'Luciano Sérgio de Fonseca',
      dataNascimento: new Date('03/14/1994'),
      classificacao: 'Professor',
    },
    {
      nomeUsuario: 'Samuel Ivan Esteves Sobrinho',
      dataNascimento: new Date('08/11/2013'),
      classificacao: 'Aluno',
    },
    {
      nomeUsuario: 'Vicente Álvaro Dias',
      dataNascimento: new Date('01/01/2010'),
      classificacao: 'Aluno',
    },
  ]

  public async abrirModalFormularioUsuario(): Promise<void> {
    const modalRef = this.ngbModal.open(ModalFormularioUsuarioComponent)
    modalRef.componentInstance.tituloModal = 'Criar usuário';

    modalRef.componentInstance.usuarioEvento.subscribe(async (response: IUsuario) => {
      if (response) {
        await this.httpService.criarUsuario(response);
        this.toastr.success('Usuário criado com sucesso!');
        this.listarUsuarios();
      }
    })
  }

}
