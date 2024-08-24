import { useRecoilState } from 'recoil'
import { modalStateAtom } from '../recoil/modalStateAtom';
import { useRef } from 'react'


const useSetModal=()=>{
    const [modalState,setModalState]=useRecoilState(modalStateAtom);
    const modalRef=useRef(null);
    const clickOutSideModal=(e: React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        console.log("clickoutsidemodal");
        if (modalRef.current ===e.target) setModalState(false);
    }
    return {modalState,modalRef,clickOutSideModal}
}
export default useSetModal;