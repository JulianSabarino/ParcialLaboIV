import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'films',
        pathMatch: 'full',
    },
    {
        path: 'actors',
        loadChildren: ()=> import('./pages/actors/actors.routes').then(m=>m.routes)
    },
    {
        path: 'films',
        loadChildren: ()=> import('./pages/films/films.routes').then(m=>m.routes)
    }
];
