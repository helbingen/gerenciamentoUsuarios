import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InputTypeEnum } from 'src/app/shared/components/input/models/InputTypeEnum';
import { IUsuario } from '../models/IUsuario.interface';

@Component({
  selector: 'app-modal-formulario-usuario',
  templateUrl: './modal-formulario-usuario.component.html',
  styleUrls: ['./modal-formulario-usuario.component.scss']
})
export class ModalFormularioUsuarioComponent {

  @Input() nomeUsuario!: string;
  @Input() dataNascimento!: Date;
  @Input() classificacao!: string;
  @Input() inputTypes = InputTypeEnum;
  @Input() tituloModal!: string;
  @Output() usuarioEvento: EventEmitter<IUsuario> = new EventEmitter<IUsuario>();

  public nomeUsuarioForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public dataNascimentoForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public classificacaoForm: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) {

  }

  private ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    if (this.dataNascimento) {
      const dataFormatada = this.dataNascimento.toISOString().substring(0, 10);
      this.dataNascimentoForm.setValue(dataFormatada);
    }
    this.nomeUsuarioForm.setValue(this.nomeUsuario);
    this.classificacaoForm.setValue(this.classificacao);
  }

  public desabilitarBotaoConfirmacao(): boolean {
    if (this.nomeUsuarioForm.invalid || this.dataNascimentoForm.invalid || this.classificacaoForm.invalid) {
      return true;
    }
    return false;
  }

  private buildUsuario(): IUsuario {
    const usuario: IUsuario = {
      nomeUsuario: this.nomeUsuarioForm.value!,
      dataNascimento: new Date(this.dataNascimentoForm.value!),
      classificacao: this.classificacaoForm.value!,
    }
    return usuario;
  }

  public salvarAlteracoes(): void {
    this.usuarioEvento.emit(this.buildUsuario())
    this.activeModal.close();
  }

}
