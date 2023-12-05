import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormularioUsuarioComponent } from '../modal-formulario-usuario/modal-formulario-usuario.component';
import { IUsuario } from '../models/IUsuario.interface';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  @Input() idUsuario!: string | null;
  @Input() nomeUsuario!: string;
  @Input() dataNascimento!: Date;
  @Input() classificacao!: string;

  constructor(private ngbModal: NgbModal, private httpService: HttpService, private toastr: ToastrService) {
  }

  public async abrirModalFormularioUsuario(): Promise<void> {
    const modalRef = this.ngbModal.open(ModalFormularioUsuarioComponent)
    modalRef.componentInstance.nomeUsuario = this.nomeUsuario;
    modalRef.componentInstance.dataNascimento = this.dataNascimento;
    modalRef.componentInstance.classificacao = this.classificacao;
    modalRef.componentInstance.tituloModal = 'Editar usuário';

    modalRef.componentInstance.usuarioEvento.subscribe(async (response: IUsuario) => {
      if (response) {
        await this.httpService.editarUsuario(response, this.idUsuario!)
        this.toastr.success('Usuário editado');
      }
    })
  }
}
