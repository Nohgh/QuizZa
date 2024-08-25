import { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import {flexJustCenter,flexColumnAlignCenter} from "../../styles/Mixin"
const QuizCreatorWrapper=styled.div`
    font-family: 'SUIT-Regular';
    margin-top: calc(50px + 5%);
    width: 100%;
    height: 100%;
    ${flexJustCenter};
`
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
    width: 200px;
    height: 50px;
    font-size: 20px;
    background-color: aliceblue;
    text-align: center;
    line-height: 50px;
`
const QuizCreator = () => {
    // 0. 문제수 세팅 | 1. 문제 생성 | 2. 생성 완료
    const [createStep,setCreateStep]=useState<number>(0);

    //세팅한 문제 수
    const [quizLength,setQuizLength]=useState< number>(0);
    //문제 수 세팅
    const handleQuizLength=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuizLength(Number(e.target.value));
    }

  return (
    <QuizCreatorWrapper>

        {createStep===0 &&
        <InputQuizLength>
            <div className="inputTitle">
                문제수를 입력하세요  
            </div>
            <input className="inputQuizLength" name="quizLength" value={quizLength} onChange={handleQuizLength} />
            {quizLength>0 &&<QuizNumBtn onClick={()=>{setCreateStep(1)}}>
                <div>CREATE</div>
                </QuizNumBtn>}
        </InputQuizLength>}

        {createStep===1 &&
        <div>
            <div>문제수 생성하세요</div>    
            <button onClick={()=>{setCreateStep(0)}}>이전</button>
            <button onClick={()=>{setCreateStep(2)}}>다음</button>
        </div>}

        {createStep===2 &&
        <div>
            <div>문제를 모두 생성하였습니다.</div>    
            <button onClick={()=>{setCreateStep(-1)}}>이전</button>
            <Link to='/'>확인</Link>
        </div>}

    </QuizCreatorWrapper>
  )
}

export default QuizCreator