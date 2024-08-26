import { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import SetQuizLength from "./SetQuizLength";
import {flexJustCenter} from "../../styles/Mixin"
import CustomQuiz from "./CustomQuiz";

const QuizCreatorWrapper=styled.div`
    font-family: 'SUIT-Regular';
    margin-top: calc(50px + 5%);
    width: 100%;
    height: 100%;
    ${flexJustCenter};
`

const QuizCreator = () => {
    // 0. 문제수 세팅 | 1. 문제 생성 | 2. 생성 완료
    const [createStep,setCreateStep]=useState<number>(0);
    return (
        <QuizCreatorWrapper>
            {createStep===0 &&
                <SetQuizLength setCreateStep={setCreateStep}/>
            }
            {createStep===1 &&
            //TODO: 문제 길이 전역적으로 관리 
                <CustomQuiz setCreateStep={setCreateStep}/>
            }

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