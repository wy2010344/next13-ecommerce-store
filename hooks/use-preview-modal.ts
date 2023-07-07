import { Product } from '@/type';
import type { FC } from 'react';
import { create } from 'zustand';

interface usePreviewModalProps {
  isOpen: boolean
  data?: Product
  onOpen(data: Product): void
  onClose(): void
}

const usePreviewModal = create<usePreviewModalProps>(set => {
  return {
    isOpen: false,
    data: undefined,
    onOpen(data) {
      set({
        data,
        isOpen: true
      })
    },
    onClose() {
      set({
        isOpen: false
      })
    },
  }
})

export default usePreviewModal;
