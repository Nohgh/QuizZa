import { useEffect, useState } from "react";
import { useQuizLengthStore } from "../../store/useQuizLengthStore"
import styled from "styled-components";
import { flexCenter, flexColumnJustStart } from "../../styles/Mixin";

interface CurrentParsentType{
  currentParsent:number;
}
const CustomQuizWrapper=styled.div`
  width: 100%;
  height: 100%;
`
const ProgressBarWrapper=styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: start;
  align-items: center;
`
const ProgressBar=styled.div.withConfig({
  shouldForwardProp:(prop)=>prop!=='currentParsent'
})<CurrentParsentType>`
  width: 50%;
  height: 30px;
  background: linear-gradient(90deg, rgba(186,237,158,1) 0%, rgba(149,229,184,1) 34%, rgba(149,211,229,1) 65%, rgba(141,168,224,1) 100%);
  border-radius: 10px;
  ${flexCenter};
  width: ${(prop)=>prop.currentParsent}%;
  transition:ease-in-out 200ms;

`

const CustomQuizAreaWrapper=styled.div`
  width: 100%;
  height: 60%;
  background-color: aliceblue;
`
const CustomQuizArea=styled.div`
  width: 100%;
  height: 90%;
  ${flexColumnJustStart}
  .QuizType{
    ${flexCenter}
    .QuizTypeBtn{
      width: 5vw;
      height: 20px;
      margin: 0 10px;
      text-align: center;
      border: 1px solid black;
    }
  }
`
const QuizNavBtnWrapper=styled.div`
  ${flexCenter}
  justify-content: space-evenly;
  width: 100%;
  height: 10%;
`
const QuizNavBtn=styled.button`
  width: 100px;
  height: 100%;
`
//useState의 set함수가 props로 들어올때는 타입을 지정 해줘야 한다.
interface PropsType{
    setCreateStep:React.Dispatch<React.SetStateAction<number>>
}
//TODO: 퀴즈 생성 페이지 ui 생각하기 , modal시 배경 overflow여도 스크롤바 보이게 
const CustomQuiz = ({setCreateStep}:PropsType)=> {
  const [currentQuizNum,setCurrentQuizNum]=useState<number>(1);
  const {quizLength}=useQuizLengthStore();
  useEffect(()=>{
    if(currentQuizNum===quizLength)
      setCreateStep(1);
  },[currentQuizNum, quizLength, setCreateStep])
  return (
    <CustomQuizWrapper>

      <ProgressBarWrapper>
        <ProgressBar currentParsent={Number((currentQuizNum/quizLength)*100)} >
          {/* <div>{currentQuizNum}/{quizLength}</div> */}
          <div>
          {currentQuizNum}/{quizLength}
          </div>
        </ProgressBar>
      </ProgressBarWrapper>

      <CustomQuizAreaWrapper>
          <CustomQuizArea>
            <div className="QuizType">
              <div className="QuizTypeBtn">주관식</div>
              <div className="QuizTypeBtn">객관식</div>
              <div className="QuizTypeBtn">서술형</div>
            </div>
          </CustomQuizArea>

          <QuizNavBtnWrapper>
            {currentQuizNum>1&&
            <QuizNavBtn onClick={()=>{setCurrentQuizNum(currentQuizNum-1)}}>이전 문제</QuizNavBtn>}
            <input type="text" value={currentQuizNum}/>
            {currentQuizNum<quizLength&&<QuizNavBtn onClick={()=>{setCurrentQuizNum(currentQuizNum+1)}}>다음 문제</QuizNavBtn>}
          </QuizNavBtnWrapper>
      </CustomQuizAreaWrapper>

      <button onClick={()=>{setCreateStep(1)}}>처음으로</button>
      {currentQuizNum==quizLength&&<button onClick={()=>{setCreateStep(2)}}>생성 완료하기</button>}
    </CustomQuizWrapper>
  )
}

export default CustomQuiz