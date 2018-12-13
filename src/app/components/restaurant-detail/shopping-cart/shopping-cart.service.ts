import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item';

export class ShoppingCartService {
    items: CartItem[] = [];

    addItem(item: MenuItem) {
        let foundItem = this.items.find( mItem => mItem.menuItem.id === item.id);

        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    clear(): void {
        this.items = [];
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }
}