import { useRef } from 'react'
import { useModalStore } from '../store/useModalStore';


const useSetModal=()=>{
    const {isModalOpen,setModalState}=useModalStore();
    const modalRef=useRef(null);
    const clickOutSideModal=(e: React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        if (modalRef.current ===e.target) {setModalState(false)
            console.log("!")
        };
    }

    return {isModalOpen,modalRef,clickOutSideModal}
}
export default useSetModal;