import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InputTypeEnum } from 'src/app/shared/components/input/models/InputTypeEnum';

@Component({
  selector: 'app-modal-formulario-usuario',
  templateUrl: './modal-formulario-usuario.component.html',
  styleUrls: ['./modal-formulario-usuario.component.scss']
})
export class ModalFormularioUsuarioComponent {

  private idUsuario!: number;
  private nomeUsuario!: string;
  private dataNascimento!: Date;
  private classificacao!: string;
  public inputTypes = InputTypeEnum;

  public nomeUsuarioForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public dataNascimentoForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public classificacaoForm: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) {

  }

  private ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    if (this.idUsuario) {
      const dataFormatada = this.dataNascimento.toISOString().substring(0, 10);
      this.nomeUsuarioForm.setValue(this.nomeUsuario);
      this.dataNascimentoForm.setValue(dataFormatada);
      this.classificacaoForm.setValue(this.classificacao);
    }
  }

  public desabilitarBotaoConfirmacao(): boolean {
    if (this.nomeUsuarioForm.invalid || this.dataNascimentoForm.invalid || this.classificacaoForm.invalid) {
      return true;
    }
    return false;
  }

  public salvarAlteracoes(): void {
    this.toastr.success('Usuário alterado')
    this.activeModal.close();
  }

}
