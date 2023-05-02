import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-dark',
  templateUrl: './btn-dark.component.html',
  styleUrls: ['./btn-dark.component.css']
})
export class BtnDarkComponent {
  @Input() btnValue!:string
}
