import { create } from "zustand";

const useStore = create((set) => ({
  product: {},
  modal: false,
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeToCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((_, index) => index !== id),
    })),

  editCart: (id, data) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id ? { ...product, ...data } : product
      ),
    })),
  setModal: (bool) => set({ modal: bool }),
  setProduct: (newData) => set({ product: newData }),
  clearProduct: () => set({ product: {} }),
}));

export default useStore;

// addToCart: (product) =>
//   set((state) => ({
//     cart: [...state.cart, product],
//   })),
// removeToCart: (code) =>
//   set((state) => ({
//     cart: state.cart.filter((product) => product.code !== code),
//   })),

// editCart: (code, newDates) =>
//   set((state) => ({
//     cart: state.cart.map((product) =>
//       product.code === code ? { ...product, ...newDates } : product
//     ),
//   })),
