import { Routes } from '@angular/router';
import {AboutcollegeComponent} from './aboutcollege/aboutcollege.component'
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HodComponent } from './hod/hod/hod.component';
import { ParentComponent } from './parents/parent/parent.component';
import { StudentComponent } from './students/student/student.component';
import { LoginComponent } from './publicauth/login/login.component';



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
    },
    
    {
        path: 'admin', component:AdminComponent
    },

    {
        path: 'hod', component:HodComponent
    },
    
    {
        path: 'parents', component:ParentComponent
    },

    {
        path: 'students', component:StudentComponent
    },

    {
        path: 'teacher', component:StudentComponent
    }
];
