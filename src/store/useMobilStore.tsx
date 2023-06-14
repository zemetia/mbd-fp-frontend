import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { RequestLokasiDto } from '@/types/entities/lokasi';

type MobilStoreType = {
  mobilSearch: RequestLokasiDto | null;
  isLoading: boolean;
  setMobilSearch: (search: RequestLokasiDto) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const useMobilStoreBase = create<MobilStoreType>((set) => ({
  mobilSearch: null,
  isLoading: true,
  setMobilSearch: (search: RequestLokasiDto) => {
    set(
      produce<MobilStoreType>((state) => {
        state.mobilSearch = search;
      })
    );
  },
  setIsLoading: (isLoading: boolean) => {
    set(
      produce<MobilStoreType>((state) => {
        state.isLoading = isLoading;
      })
    );
  },
}));

const useMobilStore = createSelectorHooks(useMobilStoreBase);

export default useMobilStore;
