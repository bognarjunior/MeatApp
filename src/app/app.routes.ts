import { Routes } from "@angular/router";
import { HomeComponent, AboutComponent, RestaurantsComponent, RestaurantDetailComponent } from "./components";

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
    path: 'restaurants/:id',
    component: RestaurantDetailComponent
  }
];