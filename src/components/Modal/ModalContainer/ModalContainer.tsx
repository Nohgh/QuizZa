import styled from 'styled-components'
import  { RefObject } from 'react'
import LoginModal from '../ModalComponents/LoginModal';
import DefaultModal from '../ModalComponents/DefaultModal';
import { useModalStore } from '../../../store/useModalStore';
import QuizStepModal from '../ModalComponents/QuizStepModal';


interface IsModalOpenType{
  isModalOpen:boolean;
  }
interface ModalSizeType{
  modalSize:string;
}
const ModalOutSide=styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isModalOpen'
  })<IsModalOpenType>`
    z-index:999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #5757574b;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${(props)=>props.isModalOpen?'flex':'none'};
`

const ModalBodyWrapper=styled.div.withConfig({
  shouldForwardProp:(prop)=>prop!=='modalSize'
})<ModalSizeType>`
    overflow: hidden; 
    background-color:white;
    width:300px;

    height: ${(prop) => 
    prop.modalSize === 's' ? '140px' : 
    prop.modalSize === 'm' ? '200px' : 
    prop.modalSize === 'l' ? '300px' : 
  'auto'};

    border-radius: 10px;
    display: flex;
    justify-content: center;
    z-index: 999;
`

// const ModalCloseBtn=styled.svg`
//     width: 24px;
//     height: 24px;
// `

interface ModalContainerProps{
    modalRef:RefObject<HTMLDivElement>;
    //RefObject 타입을 사용하여 HTMLDivElement에 대한 참조를 지정한다.
}

const ModalContainer= ({modalRef}:ModalContainerProps) => {
    const{modalName,modalSize,isModalOpen}=useModalStore();
    // FIXME: 모달 크기 설정할 수 있게 useModalStore에서 추가 관리
    return (
            <ModalOutSide ref={modalRef} isModalOpen={isModalOpen} >
                <ModalBodyWrapper modalSize={modalSize}>
                    {/* <ModalCloseBtn onClick={()=>setModalState(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></ModalCloseBtn> */}
                    <>
                      {modalName==='default'&&
                            <DefaultModal/>
                      }
                      {modalName==='login'&&
                            <LoginModal/>
                      }
                      {modalName==='beforeStep'&&
                            <QuizStepModal step={"beforeStep"}/>
                      }
                      {modalName==='nextStep'&&
                            <QuizStepModal step={"nextStep"}/>
                      }
                    </>
                </ModalBodyWrapper>
            </ModalOutSide>
    )
}

export default ModalContainer