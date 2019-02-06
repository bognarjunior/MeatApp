import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(
    orderComponent: OrderComponent,
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot): boolean {

      if (!orderComponent.isOrderCompleted()) {
        return window.confirm('Realmente deseja desistir da compra?');
      } else {
        return true;
      }

  }
}
