import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  //hodnota, ktora je zasielana pomocou ngModel v input.component.html
  name = '';

  // funkcia inputSaveActualValue() je zasielana z app.component.html z komponenty <app-input></app-input>
  @Output() inputSaveActualValue = new EventEmitter<string>();

  //funkcia saveValue() je v input.component.html vyvolana pomocou eventu keydown
  saveValue() {
    this.inputSaveActualValue.emit(this.name);
  }
}
