import { create } from 'zustand';

type NavbarStore = {
  states: { isOpen: boolean };
  actions: {
    toggleIsOpen(): void;
  };
};

export const useNavbarStore = create<NavbarStore>(set => ({
  states: {
    isOpen: false,
  },
  actions: {
    toggleIsOpen: () => {
      set(state => ({ states: { isOpen: !state.states.isOpen } }));
    },
  },
}));
