import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        'path': '',
        loadComponent: ()=>
            import('./pages/home-page/home-page.component').then(
                (mod)=> mod.HomePageComponent
            )
        
    },
    {
        'path': 'home',
        loadComponent: ()=>
            import('./pages/home-page/home-page.component').then(
                (mod)=> mod.HomePageComponent
            )
    }
];
