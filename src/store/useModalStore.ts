import { create } from "zustand";

type ModalState={
    isModalOpen:boolean;
    setModalState:(open:boolean)=>void;
}

export const useModalStore = create<ModalState>((set)=>({
    isModalOpen:false,
    setModalState: (open:boolean)=>set({isModalOpen:open})
}));