import { create } from "zustand";

const useStore = create((set) => ({
  product: {},
  modal: false,
  cart: [],

  // addToCard: (),
  // editCart: (),
  // removeToCart: (),
  setModal: (bool) => set({ modal: bool }),
  setProduct: (newData) => set({ product: newData }),
  clearProduct: () => set({ product: {} }),
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
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