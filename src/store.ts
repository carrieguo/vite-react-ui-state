import { create } from "zustand";
import { Asset } from "@chain-registry/types";
interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));


interface StoreState {
  assetList: Asset[]; 
  addAssetList: (newAsset: Asset) => void; 
  addAssetRandom: boolean;
  setAddAssetRandom: (isRandom: boolean) => void;
  dataSource: string;
  setDataSource: (newDataSource: string) => void;
  selectedChain: string;
  setSelectedChain: (newChain: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  
  assetList: [],
  addAssetList:(newAsset) =>
    set((state) => ({ assetList: [newAsset, ...state.assetList] })),
  addAssetRandom:false,
  setAddAssetRandom: (isRandom: boolean) =>
    set(() => ({ addAssetRandom: isRandom })),
  dataSource: "@chain-registry/client",
  setDataSource: (newDataSource: string) =>
    set(() => ({ dataSource: newDataSource })),
  selectedChain: "osmosis",
  setSelectedChain: (newChain: string) =>
    set(() => ({ selectedChain: newChain })),
}));
 