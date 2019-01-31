import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ShoppingCartService, CartItem } from '../restaurant-detail';
import { LoginService } from '../security';

import { Order } from './order.model';
import { MEAT_API } from '../../app.api';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
    private cartService: ShoppingCartService,
    private loginService: LoginService
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
    let headers = new HttpHeaders();

    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    }
    return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers}).map( (order: Order) => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}