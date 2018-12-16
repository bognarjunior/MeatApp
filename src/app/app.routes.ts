import { Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  RestaurantsComponent,
  RestaurantDetailComponent,
  MenuComponent,
  ReviewsComponent,
  OrderComponent
} from './components';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'order',
    component: OrderComponent
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
  }
];