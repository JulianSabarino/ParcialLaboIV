import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('../actors/actors.component').then(m=>m.ActorsComponent)
    },
    {
        path: 'abm',
        loadComponent: ()=> import('../actors/abmactors/abmactors.component').then(m=>m.AbmactorsComponent)
    }
];
