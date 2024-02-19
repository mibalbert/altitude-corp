/**
 * hooks/use-is-saving-pages-edit.js
 */

import { create } from "zustand";

export const useIsSavingPagesEdit = create((set) => ({
  isSaving: false,
  onIsSavingChange: (state) => set({ isSaving: state }),
}));
