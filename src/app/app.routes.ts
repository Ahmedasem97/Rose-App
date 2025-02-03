import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadComponent: () =>
      import('./core/layout/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./core/pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'policy',
        loadComponent: () =>
          import('./shared/components/ui/policy/policy.component').then(
            (c) => c.PolicyComponent
          ),
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('./shared/components/ui/delivery/delivery.component').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./shared/components/ui/faqs/faqs.component').then(
            (c) => c.FAQSComponent
          ),
      },
    ],
  },
];
