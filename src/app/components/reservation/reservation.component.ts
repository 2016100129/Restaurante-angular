import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  selectedOption!: string;
  reserveForm!: FormGroup

  options: Option[] = [
    {value: '1', viewValue: '1 persona'},
    {value: '2', viewValue: '2 personas'},
    {value: '3', viewValue: '3 personas'},
    {value: '4', viewValue: '4 personas'}
  ];


  constructor(
    public fb: FormBuilder,
    public reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.reserveForm = this.fb.group({
      name_client: ['', Validators.required],
      phone_number: ['', Validators.required],
      email_client: ['', Validators.required],
      persons_number: ['', Validators.required],
      date_reserve: ['', Validators.required]
    })
    console.log(this.reserveForm)
  }

  saveForm() {
    console.log(this.reserveForm.value)
    // const dataPrueba = {
    //   "name_client": "Prueba desde ANgular 33333",
    //   "email_client": "angular@gmail.com",
    //   "phone_number": "995335449",
    //   "persons_number":"4",
    //   "date_reserve":"2023-04-11"
    // }
    this.reservationService.addRevervation(JSON.stringify(this.reserveForm.value)).subscribe((response) => {
      console.log(response)
    })
  }

}
