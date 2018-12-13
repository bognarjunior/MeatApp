import { MenuItem } from '../menu-item';

export class CartItem {
    constructor(
        public menuItem: MenuItem,
        public quantity = 0
    ) {}

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}