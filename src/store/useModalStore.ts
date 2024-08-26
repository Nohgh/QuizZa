import { create } from "zustand";

type ModalState={
    isModalOpen:boolean;
    modalName:string;
    setModalState:(open:boolean)=>void;
    setModalName:(name:string)=>void;
}

export const useModalStore = create<ModalState>((set)=>({
    isModalOpen:false,
    modalName:'default',
    setModalState: (open:boolean)=>set({isModalOpen:open}),
    setModalName: (name:string)=>set({modalName:name})
}));