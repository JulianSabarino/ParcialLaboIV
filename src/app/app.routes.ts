import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';
import { admin2Guard } from './guards/admin2.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: ()=> import('./pages/home/home.component').then(m=>m.HomeComponent)
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./pages/auth/auth.routes').then(m=>m.auth_routes),
        canActivate:[noAuthGuard]
    },
    {
        path: 'alta',
        loadComponent: ()=> import('./pages/alta/alta.component').then(m=>m.AltaComponent),
        canActivate:[authGuard]
    },
    {
        path: 'listado',
        loadComponent: ()=> import('./components/listado/listado.component').then(m=>m.ListadoComponent),
        canActivate:[authGuard]
    },
    {
        path: 'vehiculos',
        loadComponent: ()=> import('./pages/vehiculos/vehiculos.component').then(m=>m.VehiculosComponent),
        canActivate:[authGuard]
    }
];
