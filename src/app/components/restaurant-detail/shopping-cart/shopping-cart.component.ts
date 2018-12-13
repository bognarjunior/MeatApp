import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCardService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCardService.items;
  }

  total(): number {
    return this.shoppingCardService.total();
  }

  clear() {
    this.shoppingCardService.clear();
  }

  removeItem(item: CartItem) {
    this.shoppingCardService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingCardService.addItem(item);
  }

}
