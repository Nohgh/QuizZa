import { create } from "zustand";
type LeftBarState={
    isLeftBarOpen:boolean;
    setIsLeftBarOpen:(isOpen:boolean)=>void
}
export const useLeftBarStore=create<LeftBarState>((set)=>({
    isLeftBarOpen:false,
    setIsLeftBarOpen:(isOpen:boolean)=>set({isLeftBarOpen:isOpen})
}))