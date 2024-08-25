import { atom } from "recoil";

export const sideBarStateAtom= atom<boolean>({
    key:'sideBarState',
    default:false
})