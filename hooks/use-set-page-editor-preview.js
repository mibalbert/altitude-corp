/**
 * use-set-page-editor-preview.js
 */

import { create } from "zustand";

export const usePageEditorPreview = create((set) => ({
  isPreview: false,
  onPreviewShow: () => set({ isPreview: true }),
  onPreviewHide: () => set({ isPreview: false }),
}));
