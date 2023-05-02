import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterClientService } from 'src/app/services/registerClient/register-client.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  registerForm!: FormGroup
  error = false; borderEmail = false
  display = true; mEmail = true
  mensaje = ""; mensajeEmail = ""
  statusPassword = false
  validForm = false
  valueMessage = true
  mensajeSystem = ""

  constructor(
    public registerCLienteService: RegisterClientService,
    public fb: FormBuilder
  ) { }
  valueLogin = false
  valueRegister = true
  check1 = true;
  check2 = false;
  optionLogin = true
  optionRegister = false
  name = false; lastname = false; date = false; document = false; email = false; phone = false; privacy = false

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name_client: ['', Validators.required],
      lastname_client: ['', Validators.required],
      birthdate_client: ['', Validators.required],
      document_client: ['', Validators.required],
      email_client: ['', Validators.required],
      phone_client: ['', Validators.required],
      password_client: ['', Validators.required],
      confirmed_password_client: ['', Validators.required],
      data_client: ['', Validators.required],
      privacy_policies_client: ['', Validators.required]
    })


  }

  loginEvent() {
    this.check2 = false
    this.valueLogin = false
    this.valueRegister = true
    this.optionLogin = true
    this.optionRegister = false
  }
  registerEvent() {
    this.check1 = false
    this.valueLogin = true
    this.valueRegister = false
    this.optionRegister = true
    this.optionLogin = false
  }


  addClient(param: any) {
    // const data = {
    //   "name_client": "Jorge Desde API",
    //   "lastname_client": "Chavez",
    //   "birthdate_client": "2000-11-21",
    //   "document_client": "71722527",
    //   "email_client": "pruebaa@gmail.com",
    //   "phone_client": "995335449",
    //   "pasword_client": "pruebapass",
    //   "data_client": 1,
    //   "privacy_policies_client": 1
    // }
    // this.registerCLienteService.addUserClient(JSON.stringify(data)).subscribe((response) =>{
    //   console.log(response)
    // })

    console.log(param)


    this.registerCLienteService.addUserClient(JSON.stringify(param)).subscribe((response) => {
      console.log(response)
      this.valueMessage = false
      this.mensajeSystem = this.registerForm.value.name_client + ", tu cuenta ha sido registrada exitosamente."
      this.ngOnInit()
    })


  }

  validatePassword() {
    if (this.registerForm.value.password_client === this.registerForm.value.confirmed_password_client) {
      this.error = false
      this.display = true
      this.statusPassword = false
      if (this.registerForm.value.password_client.length < 8) {
        this.mensaje = "La contraseña debe tener mínimo 8 carácteres."
        this.error = true
        this.display = false
        this.statusPassword = false
      } else {
        this.error = false
        this.display = true
        this.statusPassword = true
      }
    } else {
      this.mensaje = "Las contraseñas no coinciden."
      this.error = true
      this.display = false
      this.statusPassword = false
    }
  }

  validateForm() {
    this.registerForm.value.name_client.length === 0 ? (alert("El campo nombre está vacío"), this.name = false) : this.name = true
    this.registerForm.value.lastname_client.length === 0 ? (alert("El campo apellido está vacío"), this.lastname = false) : this.lastname = true
    this.registerForm.value.birthdate_client.length === 0 ? (alert("El campo fecha de nacimiento está vacío"), this.date = false) : this.date = true
    this.registerForm.value.document_client.length === 0 ? (alert("El campo documento está vacío"), this.document = false) : this.document = true
    // this.registerForm.value.email_client.length === 0 ? (alert("El campo correo está vacío"), this.email = false) : this.email = true
    this.registerForm.value.phone_client.length === 0 ? (alert("El celular correo está vacío"), this.phone = false) : this.phone = true
    this.registerForm.value.privacy_policies_client ? this.privacy = true : (alert("Debes aceptar los términos y condiciones"), this.privacy = false)

    if (this.name && this.lastname && this.date && this.document && this.email && this.phone && this.privacy && this.statusPassword) {
      this.addClient(this.registerForm.value)
    } else {
      console.log("datos por validar")
    }
  }

  validateEmail() {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.registerForm.value.email_client;
    const isValidEmail = EMAIL_REGEX.test(email);

    if (isValidEmail) {
      this.mEmail = true
      this.mensajeEmail = ""
      this.borderEmail = false
      this.registerCLienteService.getEmailUser().subscribe((response) => {
        console.log(response)
        console.log(email)
        const found = response.data.some((element: any): any => element.email_client === email)
        console.log(found)
        if (found) {
          this.mEmail = false
          this.mensajeEmail = "Este correo ya está en uso"
          this.borderEmail = true
          this.email = false
        } else {
          this.mEmail = true
          this.mensajeEmail = ""
          this.borderEmail = false
          console.log("Correo validado con éxito")
          this.email = true
        }
      })
    } else {
      this.mEmail = false
      this.mensajeEmail = "El correo no es válido"
      this.borderEmail = true
      this.email = false
    }

  }
}
