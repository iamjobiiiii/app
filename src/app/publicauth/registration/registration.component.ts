import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule,FormBuilder,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  Registerform: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    // Define form controls and validation
    this.Registerform = this.fb.group({
      userid: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['',Validators.required]
    });
  }

  onsave(): void {
    
  }

}
