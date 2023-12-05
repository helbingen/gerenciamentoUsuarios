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
    // {
    //   nomeUsuario: 'Daniel Helbingen',
    //   dataNascimento: new Date('08/24/1995'),
    //   classificacao: 'new Member',
    // },
    // {
    //   nomeUsuario: 'Daniel Helbingen',
    //   dataNascimento: new Date('08/24/1995'),
    //   classificacao: 'new Member',
    // },
    // {
    //   nomeUsuario: 'Daniel Helbingen',
    //   dataNascimento: new Date('08/24/1995'),
    //   classificacao: 'new Member',
    // },
    // {
    //   nomeUsuario: 'Daniel Helbingen',
    //   dataNascimento: new Date('08/24/1995'),
    //   classificacao: 'new Member',
    // },
  ]

  public async abrirModalFormularioUsuario(): Promise<void> {
    const modalRef = this.ngbModal.open(ModalFormularioUsuarioComponent)
    modalRef.componentInstance.tituloModal = 'Criar usuário';

    modalRef.componentInstance.usuarioEvento.subscribe(async (response: IUsuario) => {
      if (response) {
        await this.httpService.criarUsuario(response);
        this.toastr.success('Usuário editado');
        this.listarUsuarios();
      }
    })
  }

}
