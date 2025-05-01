import { Routes } from '@angular/router';
import {AboutcollegeComponent} from './aboutcollege/aboutcollege.component'
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HodComponent } from './hod/hod/hod.component';
import { ParentComponent } from './parents/parent/parent.component';
import { StudentComponent } from './students/student/student.component';
import { LoginComponent } from './publicauth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CemarkComponent } from './students/cemark/cemark.component';
import { InternalmarkComponent } from './students/internalmark/internalmark.component';
import { AttendanceComponent } from './students/attendance/attendance.component';
import { CemarkmanagementComponent } from './office/cemarkmanagement/cemarkmanagement.component';
import { InernalmarkmanagemantComponent } from './office/inernalmarkmanagemant/inernalmarkmanagemant.component';
import { AttendancemanagementComponent } from './office/attendancemanagement/attendancemanagement.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';




export const routes: Routes = [

 
    {         path: '', 
              redirectTo: 'dashboard',
              pathMatch:'full'

    },

    { 
              path: 'appaboutcollege', component: AboutcollegeComponent
    } ,

    { 
        path: 'dashboard', component: SectionHeroComponent,

    },
    
    {
        path: 'signin', component: LoginComponent
    },
    
    {
        path: 'admin', component:AdminComponent
    },

    {
        path: 'hod', component:HodComponent,

    },
    
    {
        path: 'parents', component:ParentComponent
    },

    {
        path: 'students', component:StudentComponent,
         children: [
             {
                path: '', redirectTo: 'profile', pathMatch: 'full',
             },
             {
                path: 'cemark', component: CemarkComponent    
            },
            {
                path: 'internal', component: InternalmarkComponent
            },
            {
                path: 'attendence', component: AttendanceComponent
                
            },
            {
                path: 'profile', component:ProfileComponent
            }
            
         ]
    },

    {
        path: 'teacher', component:TeacherComponent,

        children: [
            {
                path: '', redirectTo: 'profile', pathMatch: 'full',
            },

            {
                path: 'profile', component:ProfileComponent
            },

            {
                path: 'ce_management', component:CemarkmanagementComponent
            },

            {
                path: 'internal_mark_management', component:InernalmarkmanagemantComponent
            },

            {
                path: 'attendance_management', component:AttendancemanagementComponent
            },

             
        ]
    },

   
];
