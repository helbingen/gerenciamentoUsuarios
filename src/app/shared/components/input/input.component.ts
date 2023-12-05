import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputTypeEnum } from './models/InputTypeEnum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label!: string;
  @Input() formControl!: FormControl;
  @Input() inputType!: InputTypeEnum;

  public inputErrorClass(): string {
    if (this.formControl.invalid) {
      return 'is-invalid';
    }
    return ''
  }

  public hasError(): boolean {
    if (this.formControl.invalid) {
      return true;
    }
    return false;
  }

}
