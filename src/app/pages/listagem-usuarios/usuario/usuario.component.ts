import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormularioUsuarioComponent } from '../modal-formulario-usuario/modal-formulario-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  @Input() idUsuario!: number;
  @Input() nomeUsuario!: string;
  @Input() dataNascimento!: Date;
  @Input() classificacao!: string;

  constructor(private ngbModal: NgbModal) {
  }

  public abrirModalFormularioUsuario(): void {
    const modalRef = this.ngbModal.open(ModalFormularioUsuarioComponent)
    modalRef.componentInstance.idUsuario = this.idUsuario;
    modalRef.componentInstance.nomeUsuario = this.nomeUsuario;
    modalRef.componentInstance.dataNascimento = this.dataNascimento;
    modalRef.componentInstance.classificacao = this.idUsuario;
  }
}
