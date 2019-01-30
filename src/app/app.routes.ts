import { Routes } from '@angular/router';
import {
  HomeComponent,
  RestaurantsComponent,
  RestaurantDetailComponent,
  MenuComponent,
  ReviewsComponent,
  OrderSummaryComponent,
  NotFoundComponent,
  LoginComponent
} from './components';

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
    loadChildren: './components/about/about.module#AboutModule'
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'order',
    loadChildren: './components/order/order.module#OrderModule'
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children:[
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