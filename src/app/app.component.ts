import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [{ name: 'Test' }];
  name = '';

  // funkcia createName() je posielana do app.component.html. Do pola items pushujeme aktualnu hodnotu inputu
  createName() {
    this.items.push({ name: this.name });
  }

  // funkcia saveActualInputValue() je posielana do app.component.html
  saveActualInputValue(name) {
    this.name = name;
  }
}
