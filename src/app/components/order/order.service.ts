import { Injectable } from '@angular/core';
import { ShoppingCartService, CartItem } from '../restaurant-detail';

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService
  ) {}

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
}