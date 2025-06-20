import { create } from 'zustand';

interface AuthModalState {
  loginOpen: boolean;
  signupOpen: boolean;
  thankYouOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openSignup: () => void;
  closeSignup: () => void;
  showThankYou: () => void;
  closeThankYou: () => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  loginOpen: false,
  signupOpen: false,
  thankYouOpen: false,
  openLogin: () => set({ loginOpen: true, signupOpen: false }),
  closeLogin: () => set({ loginOpen: false }),
  openSignup: () => set({ signupOpen: true, loginOpen: false }),
  closeSignup: () => set({ signupOpen: false }),
  showThankYou: () => set({ thankYouOpen: true, signupOpen: false, loginOpen: false }),
  closeThankYou: () => set({ thankYouOpen: false }),
}));
