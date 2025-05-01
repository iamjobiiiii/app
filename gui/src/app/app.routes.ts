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
import { ClassinchargeComponent } from './classincharge/classincharge.component';
import { RemovestudentComponent } from './office/removestudent/removestudent.component';
import { PLPromotionComponent } from './office/p-l-promotion/p-l-promotion.component';
import { EventcreationComponent } from './office/eventcreation/eventcreation.component';
import { RegistrationComponent } from './publicauth/registration/registration.component';
import { ParentcreationComponent } from './office/parentcreation/parentcreation.component';
import { UsermanagmentComponent } from './office/usermanagment/usermanagment.component';
import { PromotionComponent } from './office/promotion/promotion.component';




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
        path: 'admin', component:AdminComponent,

        children: [
            { path: '', redirectTo: 'eventmanagement', pathMatch: 'full',},
            { path: 'eventmanagement', component: EventcreationComponent, },
            { path: 'registration', component: RegistrationComponent, },
            { path: 'parentsmanagement', component: ParentcreationComponent, },
            { path: 'usermanagement', component: UsermanagmentComponent },
            {path: 'profile', component:ProfileComponent},
            {path: 'promotion', component:PromotionComponent},
           
        ]
    },

    {
        path: 'hod', component:HodComponent,

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
                path: 'attendence_management', component:AttendancemanagementComponent
            },
            {
                path: 'remove_student', component:RemovestudentComponent
            },
            {
                path: 'p&L_management', component:PLPromotionComponent
            },


        ]


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

    { path: 'classincharge', component: ClassinchargeComponent, 

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
