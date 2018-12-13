import { MenuItem } from '../menu-item';

export class CartItem {
    constructor(
        private menuItem: MenuItem,
        private quantity = 0
    ) {}

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}