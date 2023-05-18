import { Component , EventEmitter, Input, Output, } from '@angular/core';
import { KeypadButton } from '../../interfaces/keypadButton.interface';

@Component({
  selector: 'gsi-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.css']
})
export class KeypadButtonComponent {
  @Input() keypadButtons:KeypadButton[]=[]
  @Output() onClick:EventEmitter<string> = new EventEmitter<string>()

  enviarAccion(accion:string){
    this.onClick.emit(accion)
  }
}
