import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('../films/films.component').then(m=>m.FilmsComponent)
    },
    {
        path: 'abm',
        loadComponent: ()=> import('../films/abmfilms/abmfilms.component').then(m=>m.AbmfilmsComponent)
    }
];
