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
          path: 'allcateogry',
          loadComponent: () =>
            import('./shared/components/business/cateogry/cateogry.component').then(
              (c) => c.CateogryComponent
            ),

        },

        {
          path: 'about-us',
          loadComponent: () =>
            import('./core/pages/about-us-page/about-us-page.component').then(
              (c) => c.AboutUsPageComponent
            ),
        },

      
    ],
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
  }
  ,
  {
          path: 'details/:id',
          loadComponent: () =>
            import('./shared/components/business/product-details/product-details.component').then(
              (c) => c.ProductDetailsComponent
            ),
  }
];
