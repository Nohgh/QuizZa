import styled from "styled-components"
import {flexColumnAlignCenter} from "../../styles/Mixin"
import { BasicBtn } from "../../styles/DesignSystem";
import { useState } from "react";

const InputQuizLength=styled.div`
    width: 50%;
    height: 50%;
    ${flexColumnAlignCenter};
    .inputTitle{
        font-size: 30px;
        margin-bottom: 10%;
    }
    .inputQuizLength{
        text-align: center;
        width: 50px;
        height: 50px;
        font-size: 20px;
        margin-bottom: 10%;
    }
`
const QuizNumBtn=styled.div`
    ${BasicBtn}
`
//useState의 set함수가 props로 들어올때는 타입을 지정 해줘야 한다.
interface PropsType{
    setCreateStep:React.Dispatch<React.SetStateAction<number>>
}

const SetQuizLength = ({setCreateStep}:PropsType) => {
    //세팅한 문제 수
    const [quizLength,setQuizLength]=useState< number>(0);
    //문제 수 세팅
    const handleQuizLength=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuizLength(Number(e.target.value));
    }
  return (
    <InputQuizLength>
            <div className="inputTitle">
                문제수를 입력하세요  
            </div>
            <input className="inputQuizLength" name="quizLength" value={quizLength} onChange={handleQuizLength} />
            {quizLength>0 &&
            <QuizNumBtn onClick={()=>{setCreateStep(1)}}>
                <div>생성하기</div>
            </QuizNumBtn>}
        </InputQuizLength>
  )
}

export default SetQuizLength