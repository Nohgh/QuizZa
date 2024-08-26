// import { useRecoilState } from 'recoil'
// import { modalStateAtom } from '../recoil/modalStateAtom';
import { useRef } from 'react'
import { useModalStore } from '../store/useModalStore';


const useSetModal=()=>{
    // 기존의 recoil코드 
    //const [modalState,setModalState]=useRecoilState(modalStateAtom);
    const {isModalOpen,setModalState}=useModalStore();
    const modalRef=useRef(null);
    const clickOutSideModal=(e: React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        //click한 영역이 modalRef.current인 modal을 제외한 바깥 영역 이면
        if (modalRef.current ===e.target) {setModalState(false)
            console.log("!")
        };
    }

    return {isModalOpen,modalRef,clickOutSideModal}
}
export default useSetModal;