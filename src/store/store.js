import { create } from "zustand";

const useStore = create((set) => ({
  product: {},
  modal: false,
  setModal: (bool) => set({ modal: bool }),
  setProduct: (newData) => set({ product: newData }),
  clearProduct: () => set({ product: {} }),
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));

export default useStore;