import { create } from "zustand";

type ModalState={
    isModalOpen:boolean;
    modalName:string;
    modalSize:string;
    setModalState:(open:boolean)=>void;
    setModalName:(name:string)=>void;
    setModalSize:(size:string)=>void;
}

export const useModalStore = create<ModalState>((set)=>({
    isModalOpen:false,
    modalName:'default',
    modalSize:'m',
    setModalState: (open:boolean)=>set({isModalOpen:open}),
    setModalName: (name:string)=>set({modalName:name}),
    setModalSize: (size:string)=>set({modalSize:size}),
}));