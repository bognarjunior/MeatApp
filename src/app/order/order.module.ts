import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-itens';
import { DeliveryCostsComponent } from './delivery-costs';
import { SharedModule } from 'app/shared';
import { Routes, RouterModule } from '@angular/router';
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
    {
        path: '',
        component: OrderComponent,
        canDeactivate: [LeaveOrderGuard]
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
