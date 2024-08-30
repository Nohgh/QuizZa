import styled from "styled-components"
import {flexColumnAlignCenter} from "../../styles/Mixin"
import { BasicBtn } from "../../styles/DesignSystem";
import { useQuizLengthStore } from "../../store/useQuizLengthStore";
import { useQuizStep } from "../../store/useQuizStep";

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
    cursor: pointer;
    ${BasicBtn}
`

const SetQuizLength = () => {
    //세팅한 문제 수
    const {setCreateStep}=useQuizStep();
    // const [quizLength,setQuizLength]=useState<number>(0);
    const {quizLength,setQuizLength}=useQuizLengthStore();
    //문제 수 세팅
    const handleQuizLength=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuizLength(Number(e.target.value));
    }
    //숫자 입력 후 enter키 인식
    const enterKeyPress=(e:React.KeyboardEvent)=>{
        if(e.key==='Enter' && quizLength>0) setCreateStep(1);
    }
  return (
    <InputQuizLength>
            <div className="inputTitle">
                <div>문제수를 입력하세요</div>
            </div>
            <input className="inputQuizLength" name="quizLength" 
            value={quizLength} onChange={handleQuizLength} onKeyDown={enterKeyPress} />
            {quizLength>0 &&
            <QuizNumBtn onClick={()=>{setCreateStep(1)}}>
                <div>생성하기</div>
            </QuizNumBtn>}
        </InputQuizLength>
  )
}

export default SetQuizLength