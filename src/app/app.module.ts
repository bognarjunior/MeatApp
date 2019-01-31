import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from 'app/app.routes';

import { AppComponent } from 'app/app.component';
import {
  HeaderComponent,
  HomeComponent,
  RestaurantsComponent,
  RestaurantComponent,
  RestaurantDetailComponent,
  MenuComponent,
  ShoppingCartComponent,
  MenuItemComponent,
  ReviewsComponent,
  OrderSummaryComponent,
  NotFoundComponent,
  LoginComponent
} from 'app';

import { SharedModule } from 'app/shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES,
      {
        preloadingStrategy: PreloadAllModules
      })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
