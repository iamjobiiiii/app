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
  
    ngOnInit(): void {
      this.isLoggedIn = !!this.authService.getToken();  // Check if the token exists
    }
  
    logout(): void {
      this.authService.logout();
      this.isLoggedIn = false;  // Update the flag after logging out
    }
}
