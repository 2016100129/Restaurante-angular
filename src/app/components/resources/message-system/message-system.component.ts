import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-system',
  templateUrl: './message-system.component.html',
  styleUrls: ['./message-system.component.css']
})
export class MessageSystemComponent {
  @Input() textoMessage!: String;
  value = false
  close(){
    this.value= true
  }
}
