import { Routes } from '@angular/router';
import {
  HomeComponent,
  LoggedInGuard,
  LoginComponent,
  MenuComponent,
  NotFoundComponent,
  OrderSummaryComponent,
  RestaurantDetailComponent,
  RestaurantsComponent,
  ReviewsComponent
} from 'app';


export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard]
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
