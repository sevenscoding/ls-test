import { defineStore } from 'pinia';
import { Product } from '@/types/product';

export interface CartState {
  items?: Product[],
}

export const useCartStore = defineStore('cart', {
  state: () : CartState => ({
    items: [],
  }),
  actions: {
    addToCart(item: Product): void {
      if (this.items !== undefined) {
        this.items.push(item);
      }
    },
    deleteItem(key: number): void {
      if (this.items?.length) {
        this.items.splice(key, 1);
      }
    },
    clearState(): void {
      this.items = [];
    },
  },
  getters: {
    amount: (state) => state?.items?.length,
  },
});
