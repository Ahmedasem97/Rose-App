import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", redirectTo:"main", pathMatch:"full"},
    {
        path:"main",
        loadComponent: () => import('./core/layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children:[
            {path:'', redirectTo: "home" ,pathMatch:"full"},
            {
                path: "home" ,
                loadComponent: ()=> import ("./core/pages/home/home.component").then(c => c.HomeComponent),
            },
        ]
    }
];
