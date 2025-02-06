import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  Registerform: FormGroup = new FormGroup({

    userid: new FormControl("",Validators.required),
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  onsave() {

    const formvalue = this.Registerform.value;
  }


 

}
