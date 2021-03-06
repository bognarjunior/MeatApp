import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ShoppingCartService, CartItem } from '../restaurant-detail';

import { Order } from './order.model';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
    private cartService: ShoppingCartService
  ) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): Array<CartItem> {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .pipe(
        map((itemOrder: Order) => itemOrder.id)
      );
  }

  clear() {
    this.cartService.clear();
  }
}
