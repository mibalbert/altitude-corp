/**
 * hooks/use-admin-saving-status.js
 */

import { create } from "zustand";

export const useSavingStatus = create((set) => ({
  isSaved: true,
  setIsSaved: (isSaved) => set({ isSaved }),
}));
