import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  public nomeUsuarioForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public dataNascimentoForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  public classificacaoForm: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(public activeModal: NgbActiveModal) {

  }

  private ngOnInit(): void {
    this.inicializarFormulario();
    console.log(this.idUsuario)
    console.log(this.nomeUsuario)
  }

  private inicializarFormulario(): void {
    if (this.idUsuario) {
      this.nomeUsuarioForm.setValue(this.nomeUsuario);
      this.dataNascimentoForm.setValue(this.dataNascimento.toLocaleDateString());
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

  }

}
