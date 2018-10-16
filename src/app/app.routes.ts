import { Routes } from "@angular/router";
import { HomeComponent, AboutComponent } from "./components";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];