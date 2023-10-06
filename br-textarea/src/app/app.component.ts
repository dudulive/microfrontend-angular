import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-textarea',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'br-textarea';
  @Input()
  label: string = "";
  @Input()
  required: boolean = false;
  @Input()
  mensagemValid: string = "";
  @Input()
  placeholder: string = "";
  @Input()
  maxLength: number = 100;
  @Input()
  type: string = "text";
  @Input()
  control = new FormControl('', this.required ? Validators.required : null);
  @Input()
  value: string = this.control.value;
  @Input()
  cols = 20;
  @Input()
  rows = 5;

  constructor() { }

  getErrorMessage() {
    if (this.required && this.control.hasError('required')) {
      return 'Campo Obrigatório';
    }

    return this.mensagemValid;
  }

}
