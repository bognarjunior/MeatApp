import { Injectable } from '@angular/core';
import { ShoppingCartService, CartItem } from '../restaurant-detail';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class OrderService {
  constructor(
    private http: Http,
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
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
      .map( response => response.json())
      .map( order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}