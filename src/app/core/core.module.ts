import { NgModule } from '@angular/core';
import { ShoppingCartService, RestaurantService, OrderService } from 'app/components';

@NgModule({
    providers: [
        ShoppingCartService,
        RestaurantService,
        OrderService
    ]
})
export class CoreModule {

}