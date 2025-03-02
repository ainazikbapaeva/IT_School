import { create } from "zustand";

interface IHeaderStore {
	isOpen: boolean;
	toggleMenu: () => void;

	setIsOpen: (value: boolean) => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
	isOpen: false,
	toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),

	setIsOpen: (value) => set({ isOpen: value }),
}));
