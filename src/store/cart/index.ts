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
  },
  getters: {
    amount: (state) => state.items.length,
  },
});
