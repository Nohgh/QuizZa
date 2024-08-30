import styled from "styled-components"
import { flexCenter } from "../../../styles/Mixin"

const BeforeStepModal=styled.div`
    padding: 5%;
    width: 100%;
    height: 100%;
`
const BeforeStepModalIcon=styled.div`
    width: 100%;
    height: 60px;
    ${flexCenter}
    .BeforeStepModalIcon{
        width: 60px;
        height: 60px;
        fill:#FF6464;
    }
`
const BeforeStepModalWords=styled.div`
margin-top: 15%;
    font-size: 20px;
    font-weight: 700;
`
const QuizStepModal = ({ step }: { step: string }) => {
    return (
    <>
        {step==='beforeStep'&& 
            <BeforeStepModal>
                <BeforeStepModalIcon>
                <svg className="BeforeStepModalIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                </BeforeStepModalIcon>
                <BeforeStepModalWords>
                    <div>작성한 문제는 저장되지 않습니다.</div>
                    <div>문제를 다시 세팅하겠습니까?</div>
                </BeforeStepModalWords>
                <div>
                    <div>취소</div>
                    <div>확인</div>
                </div>
            </BeforeStepModal>}
        {step==='nextStep'&& <div>nextStep</div>}
    </>
        
    
  )
}

export default QuizStepModal