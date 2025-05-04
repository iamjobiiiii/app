import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink,CommonModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

   
    isLoggedIn: boolean = false;

    constructor(private authService: AuthService) {}
  
    ngOnInit() {
      this.authService.isLoggedIn$.subscribe(status => {
        this.isLoggedIn = status;
      });
    }
  
    logout() {
      this.authService.logout();
    }
}
