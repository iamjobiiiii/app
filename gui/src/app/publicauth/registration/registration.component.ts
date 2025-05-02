import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  Registerform!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    // Define form controls and validation
  
  }
  ngOnInit(): void {
    this.Registerform = this.fb.group({
      userid: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onsave(): void {

    console.log('Submitted Data:', this.Registerform.value);

    this.authService.registerUser(
      this.Registerform.value.userid,
      this.Registerform.value.username,
      this.Registerform.value.password,
      this.Registerform.value.role,
      this.Registerform.value.address
    )
    .subscribe({
      next: (res) => {
        console.log('Registration successful', res);
        alert('User registered successfully!');
        this.Registerform.reset();
      },
      error: (err) => {
        console.error('Registration failed', err.message);
        alert('Registration failed: ' + err.message);
      }
    });
  }
    
  }


