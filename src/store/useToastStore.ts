import { create } from "zustand";
interface ToastType{
    toastOpen:boolean;
    setToastOpen:(state:boolean)=>void;
}
export const useToastStore=create<ToastType>((set)=>({
    toastOpen:true,
    setToastOpen:(state:boolean)=>set({toastOpen:state})
}))