import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.authService.signin(this.login.userid, this.login.password).subscribe(token=>{
      if('access_token' in token) {
        this.authService.saveToken(token['access_token'] as string);
        this.router.navigateByUrl('admin');
      }else {
        alert("Wrong Credentials! Please try again...");
      }
    })
  }

  onLogin() {

   
       if (this.login.userid === 'admin' && this.login.password === 'admin') {
        this.router.navigateByUrl('admin');
      }

    else if (this.login.userid === 'hod' && this.login.password === 'hod') {
      this.router.navigateByUrl('hod');
    }

    else if (this.login.userid === 'parent' && this.login.password === 'parent') {
      this.router.navigateByUrl('parent');
    }

    else if (this.login.userid === 'student' && this.login.password === 'student') {  
      this.router.navigateByUrl('student');
    }

    else if (this.login.userid === 'teacher' && this.login.password === 'teacher') {
      this.router.navigateByUrl('teacher');
    }
  }
}
