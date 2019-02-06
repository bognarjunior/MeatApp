import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  preserveWhitespaces: true,
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready',
        animate('500ms 0s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(-50px)', offset: 0 }),
          style({ opacity: 0.8, transform: 'translateX(30px)', offset: 0.8 }),
          style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
        ]))
      ),
      transition('ready => void',
        animate('500ms 0s ease-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
          style({ opacity: 0.8, transform: 'translateX(-30px)', offset: 0.2 }),
          style({ opacity: 0, transform: 'translateX(50px)', offset: 1 })
        ]))
      ),
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
  rowState = 'ready';

  constructor(
    private shoppingCardService: ShoppingCartService
  ) {}

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
