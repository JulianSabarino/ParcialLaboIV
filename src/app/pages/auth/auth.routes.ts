import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { UnsavedChangesGuard } from '../../guards/termscond.guard';



export const auth_routes: Routes = [

    {
        path: 'login',
        component:LoginComponent
        
    },
    {
        path: 'registro',
        component:RegisterComponent
    }
    ,
    {
        path: 'tac',
        component:TermsconditionsComponent,
        canDeactivate: [UnsavedChangesGuard]
    }
];
