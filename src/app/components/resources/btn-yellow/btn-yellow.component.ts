import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-yellow',
  templateUrl: './btn-yellow.component.html',
  styleUrls: ['./btn-yellow.component.css']
})
export class BtnYellowComponent {
     @Input() txtBtn!: String;
}
