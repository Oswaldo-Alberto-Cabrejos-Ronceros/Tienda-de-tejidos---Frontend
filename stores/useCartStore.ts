import { defineStore } from "pinia";
import type { Producto } from "~/interfaces/Producto";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as Array<{ product: Producto; quantity: number }>,
  }),
  getters: {
    products: (state) => state.cart,
    totalPrice: (state) =>
      state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    isEmpty: (state) => state.cart.length === 0,
  },
  actions: {
    //para guardar en sessionStorange
    loadFromSession() {
      const cart = sessionStorage.getItem("cart");
      cart
        ? (this.cart = JSON.parse(cart) as Array<{
            product: Producto;
            quantity: number;
          }>)
        : (this.cart = []);
    },
    //guardar estado en sessionStorange
    setCartSession() {
      sessionStorage.setItem("cart", JSON.stringify(this.cart));
    },
    //primera logica, luego optimizar
    addToCart(product: Producto, quantity: number) {
      //obtener productos de session
      this.loadFromSession();
      const existingItem = this.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.push({ product, quantity });
      }
      //guadamos en sessionStorange
      this.setCartSession();
    },
    removeFromCart(productId: number) {
      this.loadFromSession();
      this.$patch((state) => {
        state.cart = state.cart.filter((item) => item.product.id !== productId);
      });
      this.setCartSession();
    },
    clearCart() {
      this.cart = [];
      sessionStorage.removeItem("cart");
    },
    //cambiar cantidad
    changeQuantityProduct(idProduct: number, newQuantity: number) {
      this.loadFromSession();
      this.$patch((state) => {
        const productIndex = state.cart.findIndex(
          (p) => Number(p.product.id) === Number(idProduct)
        );

        if (productIndex !== -1) {
          state.cart[productIndex].quantity = newQuantity;
          this.setCartSession()
        } else {
          console.warn("Producto no encontrado en el carrito.");
        }
      });
    },
  },
});
