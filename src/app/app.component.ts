import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SectionHeroComponent} from './section-hero/section-hero.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, SectionHeroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    
})
export class AppComponent {
  title = 'app';
  
  
  
}
