/**
 * hooks/use-admin-sidenav.js
 */

import { create } from "zustand";

export const useAdminSideNav = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
}));
