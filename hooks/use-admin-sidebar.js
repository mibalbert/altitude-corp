/**
 * hooks/use-admin-sidenav.js
 */

import { create } from "zustand";

export const useAdminSideNav = create((set) => ({
  isOpen: true,
  setToOpen: () => set({ isOpen: true }),
  setToClosed: () => set({ isOpen: false }),
}));
