import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



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

 

  constructor( private router: Router) {


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
