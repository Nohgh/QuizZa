import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../recoil/modalStateAtom";
import selectedModalAtom from "../recoil/selectedModalAtom";


const useSelectedModal=(modalName:string)=>{
    const modalState=useSetRecoilState(modalStateAtom);
    const setSeledtedModal=useSetRecoilState(selectedModalAtom);
    const updateModalName=()=>{
        modalState(true);
        setSeledtedModal(modalName);
    }
    return {updateModalName};
}
export default useSelectedModal;