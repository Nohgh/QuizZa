import { useState } from "react";
import { useQuizLengthStore } from "../../store/useQuizLengthStore"
import styled from "styled-components";
import { flexCenter, flexColumnAlignCenter, flexColumnJustStart } from "../../styles/Mixin";


const CustomQuizWrapper=styled.div`
  width: 100%;
  height: 100%;
`
const ProgressBarWrapper=styled.div`
  width: 100%;
  height: 5%;
  ${flexCenter}
`
const ProgressBar=styled.div`
  width: 50%;
  height: 30px;
  background-color: #9b9bd4;
  border-radius: 10px;
  ${flexCenter}
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
//TODO: 퀴즈 생성 페이지 ui 생각하기 
const CustomQuiz = ({setCreateStep}:PropsType)=> {
  const [currentQuizNum,setCurrentQuizNum]=useState<number>(1);
  const {quizLength}=useQuizLengthStore();
  return (
    <CustomQuizWrapper>

      <ProgressBarWrapper>
        <ProgressBar>
        {currentQuizNum}/{quizLength}
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
            <QuizNavBtn onClick={()=>{setCurrentQuizNum(currentQuizNum+1)}}>다음 문제</QuizNavBtn>
          </QuizNavBtnWrapper>
      </CustomQuizAreaWrapper>

      <button onClick={()=>{setCreateStep(1)}}>문제 수 세팅</button>
      {/* 모두 완료하면 표시<button onClick={()=>{setCreateStep(2)}}>다음</button> */}
    </CustomQuizWrapper>
  )
}

export default CustomQuiz