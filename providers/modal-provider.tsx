"use client"
import PreviewModal from '@/components/preview-modal';
import { useIsMounted } from '@/hooks/use-is-mounted';
import type { FC } from 'react';

interface ModalProviderProps { }

const ModalProvider: FC<ModalProviderProps> = () => {
  const isMounted = useIsMounted()
  if (!isMounted) {
    return null
  }
  return (<PreviewModal />);
}

export default ModalProvider;
