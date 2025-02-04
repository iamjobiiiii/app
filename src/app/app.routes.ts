import { Routes } from '@angular/router';
import {AboutcollegeComponent} from './aboutcollege/aboutcollege.component'
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [

 
    {         path: '', 
              redirectTo: 'dashboard',
              pathMatch:'full'

    },

    { 
              path: 'appaboutcollege', component: AboutcollegeComponent
    } ,

    { 
        path: 'dashboard', component: SectionHeroComponent
    },
    
    {
        path: 'signin', component: LoginComponent
    }
    

];
