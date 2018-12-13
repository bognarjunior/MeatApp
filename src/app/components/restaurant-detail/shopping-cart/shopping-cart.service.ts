import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item';

export class ShoppingCartService {
    items: CartItem[];

    addItem(item: MenuItem) {

    }

    removeItem(item: CartItem) {

    }

    clear(): void {
        this.items = [];
    }

    total(): number {
        return 0;
    }
}