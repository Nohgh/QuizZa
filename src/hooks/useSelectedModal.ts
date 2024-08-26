import { useSetRecoilState } from "recoil";
// import { modalStateAtom } from "../recoil/modalStateAtom";
import selectedModalAtom from "../recoil/selectedModalAtom";
import { useModalStore } from "../store/useModalStore";


const useSelectedModal=(modalName:string)=>{

    // const modalState=useSetRecoilState(modalStateAtom);
    const {setModalState}=useModalStore();
    const setSeledtedModal=useSetRecoilState(selectedModalAtom);

    const updateModalName=()=>{
        // modalState(true);
        setModalState(true);
        setSeledtedModal(modalName);
    }
    return {updateModalName};
}
export default useSelectedModal;