import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-itens';
import { DeliveryCostsComponent } from './delivery-costs';
import { SharedModule } from 'app/shared';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        component: OrderComponent
    }
]

@NgModule({
    declarations: [
        OrderComponent,
        OrderItemsComponent,
        DeliveryCostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class OrderModule {}