import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule,FormBuilder,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  Registerform: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Define form controls and validation
    this.Registerform = this.fb.group({
      userid: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onsave(): void {
    if (this.Registerform.valid) {
      const { userid, username, password } = this.Registerform.value;
      
      // Call register service method
      this.authService.register(userid, username, password, 'user').subscribe({
        next: (response) => {
          this.authService.storeToken(response.token);
          this.router.navigate(['/protected']);  // Redirect to a protected route
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Registration failed. Please try again.';
        }
      });
    }
  }

}
