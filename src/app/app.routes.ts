import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'actors',
        loadChildren: ()=> import('./pages/actors/actors.routes').then(m=>m.routes)
    },
    {
        path: 'films',
        loadChildren: ()=> import('./pages/films/films.routes').then(m=>m.routes)
    },
    {
        path: 'home',
        loadComponent: ()=> import('./pages/home/home.component').then(m=>m.HomeComponent)
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./pages/auth/auth.routes').then(m=>m.auth_routes)
    },
    {
        path: 'alta',
        loadComponent: ()=> import('./pages/alta/alta.component').then(m=>m.AltaComponent)
    }
];
