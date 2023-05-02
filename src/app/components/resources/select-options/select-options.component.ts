import { Component, Input } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent {
  @Input() nameSelect!: string;
  
  options: Option[] = [
    {value: '1', viewValue: '1 persona'},
    {value: '2', viewValue: '2 personas'},
    {value: '3', viewValue: '3 personas'},
    {value: '4', viewValue: '4 personas'}
  ];
}
