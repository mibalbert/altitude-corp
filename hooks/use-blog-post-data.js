/**
 * hooks/use-conver-image.js
 */

import { create } from "zustand";

export const useBlogPostData = create((set) => ({
  newData: null,
  initialData: null,
  onNewData: (newData) => set({ newData }),
  onInitialData: (initialData) => set({ initialData }),
}));
