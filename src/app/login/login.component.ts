import { HttpClient } from '@angular/common/http';
import { Component,Inject,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    login: any = {
        userid:'',
        password:''    
    }

    router = inject(Router)
    http = inject(HttpClient)

    onlogin(){
       this.http.post("http://localhost:3000/auth/users",this.login).subscribe((rea:any)=>{
        // Assuming the response contains the role
        const role = rea.role;

        // Navigate based on the user role
        if (role === 'admin') {
          this.router.navigateByUrl('admin');
        } else if (role === 'student') {
          this.router.navigateByUrl('student');
        } else if (role === 'hod') {
          this.router.navigateByUrl('hod');
        } else if (role === 'parents') {
          this.router.navigateByUrl('parents');
        } else if (role === 'teacher') {
          this.router.navigateByUrl('teacher');
        } else {
          alert('Unknown role');
        }
      
       },error=>{
         alert("incorrect")     
       });
       
    }
 
}
