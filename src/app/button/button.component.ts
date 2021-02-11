import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  //funkcia buttonCreateName() prichadza z app.component.html z komponenty <app-button></app-button>
  @Output('buttonCreateName') buttonCreateName = new EventEmitter();

  //funkcia addInputValue je zasielana do button.component.html
  addInputValue() {
    this.buttonCreateName.emit();
  }
}
