// store.js
import create from 'zustand';

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export const visibleStore = create((set) => ({
  visible: false,
  visibleToggle: () => set((state) => ({ visible: !state.visible })),
}));
