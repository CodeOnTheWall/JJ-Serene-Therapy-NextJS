import { create } from "zustand";

interface useHamburgerStateProps {
  isOpen: boolean;
  // void means a function that takes no arguments and doesnt return any value
  onOpen: () => void;
  onClose: () => void;
}

export const useHamburgerState = create<useHamburgerStateProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
