import { Routes } from "@angular/router";
import { HomeComponent, AboutComponent, RestaurantsComponent } from "./components";

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
  }
];