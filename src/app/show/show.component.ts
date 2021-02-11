import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent {
  //parameter name nam prichadza z app.component.ts
  @Input('items') items: string;
}
