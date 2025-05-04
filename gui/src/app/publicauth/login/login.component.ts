import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../service/auth.service';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = {
    userid: '',
    password: ''
  };
  constructor( private router: Router, private authService: AuthService) {


  }
  
  public signin() {
    this.authService.signin(this.login.userid, this.login.password).subscribe(
      (response: any) => {
        console.log('API Response:', response);

        if (response && response.access_token) {
          // Save the token
          this.authService.saveToken(response.access_token);
          this.authService.saveSession(response.access_token, response.role);
          

          // Decode the JWT token to extract the role
          try {
            const decodedToken: any = jwtDecode(response.access_token); // Decode the token
            const role = decodedToken.role ? decodedToken.role.toLowerCase() : null; // Extract role
            console.log('User role:', role);

            if (role) {
              // Navigate based on role
              switch (role) {
                case 'admin':
                  this.router.navigateByUrl('admin');
                  break;
                case 'hod':
                  this.router.navigateByUrl('hod');
                  break;
                case 'parents':
                  this.router.navigateByUrl('parents');
                  break;
                case 'students':
                  this.router.navigateByUrl('students');
                  break;
                case 'teacher':
                  this.router.navigateByUrl('teacher');
                  break;
                default:
                  alert(`Unknown role: ${role}. Please contact support.`);
                  break;
              }
            } else {
              alert("Role is undefined or null. Please contact support.");
            }
          } catch (error) {
            console.error("Error decoding token:", error);
            alert("An error occurred while decoding the token. Please contact support.");
          }
        } else {
          alert("Wrong credentials! Please try again...");
        }
      },
      error => {
        console.error('Login error:', error);
        alert("An error occurred while trying to log in. Please try again.");
      }
    );
  }
}

 

