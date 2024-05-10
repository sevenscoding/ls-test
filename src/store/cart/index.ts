import { defineStore } from 'pinia';

export interface CartState {
  items?: string[],
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(item: never): void {
      this.items.push(item);
    },
    deleteItem(key: never): void {
      this.items.splice(key, 1);
    },
    clearState(): void {
      this.items = [];
    },
  },
  getters: {
    amount: (state) => state.items.length,
  },
});
