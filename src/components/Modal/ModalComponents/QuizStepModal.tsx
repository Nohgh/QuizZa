import styled from "styled-components"
import { flexCenter, flexColumnCenter } from "../../../styles/Mixin"
import { Colors } from "../../../styles/Colors"
import { useModalStore } from "../../../store/useModalStore"
import { useQuizStep } from "../../../store/useQuizStep"

const BeforeStepModalWrapper=styled.div`
    width: 100%;
    height: 100%;
`
const BeforeStepModal=styled.div`
    padding: 2%;
    width: 100%;
    height: 100%;
`
const BeforeStepModalIcon=styled.div`
    width: 100%;
    height: 30px;
    ${flexCenter}
    .BeforeStepModalIcon{
        width: 30px;
        height: 30px;
        fill:#FF6464;
    }
`
const BeforeStepModalWords=styled.div`
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 2%;
    ${flexColumnCenter}
    /* background-color: #1a2e40; */
    .smallWords{
        font-size: 13px;
        color: ${Colors.gray4};
        font-weight: 500;
    }
`
const BeforeStepModalBtnWrapper=styled.div`
    width: 100%;
    height: 35px;
    ${flexCenter}
    justify-content: space-evenly;
    margin-top: 4%;
    font-size: 17px;
    font-weight:600;
    .cancle{
        background-color: ${Colors.gray1};
        color: ${Colors.gray4};
    }
    .ok{
        background-color: #FFE7E7;
        color: #FF6464;
    }
`
const BeforeStepModalBtn=styled.div`
    ${flexCenter}
    border-radius: 8px;
    width: 43%;
    height: 100%;
    cursor: pointer;
`
const QuizStepModal = ({ step }: { step: string }) => {
    const {setModalState}=useModalStore();
    const {setCreateStep}=useQuizStep();
    const clickCancle=()=>{
        setModalState(false);
    }
    const clickBefore=()=>{
        setCreateStep(0);
        setModalState(false);
    }
    return (
    <BeforeStepModalWrapper >
        {step==='beforeStep'&& 
            <BeforeStepModal>
                <BeforeStepModalIcon>
                <svg className="BeforeStepModalIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                </BeforeStepModalIcon>
                <BeforeStepModalWords>
                    <div>작성한 문제는 저장되지 않습니다.</div>
                    <div className="smallWords">문제를 다시 세팅하겠습니까?</div>
                </BeforeStepModalWords>
                <BeforeStepModalBtnWrapper>
                    <BeforeStepModalBtn className="cancle" onClick={clickCancle}>취소</BeforeStepModalBtn>
                    <BeforeStepModalBtn className="ok" onClick={clickBefore}>확인</BeforeStepModalBtn>
                </BeforeStepModalBtnWrapper>
            </BeforeStepModal>}
        {step==='nextStep'&& <div>nextStep</div>}
    </BeforeStepModalWrapper>
        
    
  )
}

export default QuizStepModal