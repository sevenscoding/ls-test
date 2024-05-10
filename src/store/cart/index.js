import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(item) {
            this.items.push(item);
        },
        deleteItem(key) {
            this.items.splice(key, 1);
        },
        clearState() {
            this.items = [];
        },
    },
    getters: {
        amount: (state) => state.items.length,
    },
});
//# sourceMappingURL=index.js.map