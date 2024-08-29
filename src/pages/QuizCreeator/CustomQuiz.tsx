import {  useState } from "react";
import { useQuizLengthStore } from "../../store/useQuizLengthStore"
import styled from "styled-components";
import { flexCenter } from "../../styles/Mixin";
import { Colors } from "../../styles/Colors";

interface CurrentParsentType{
  currentParsent:number;
}
interface IsActiveType {
  isActive: boolean;
}

const CustomQuizWrapper=styled.div`
  width: 80%;
  height: 100%;
`
const ProgressBarWrapper=styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 1%;
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
`
const CustomQuizArea=styled.div`
  width: 100%;
  height: 90%;
  font-size:20px;

`

const QuizTypeBtnBundle=styled.div`
    display: flex;
    margin-bottom: 2%;
`
const QuizTypeBtn=styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<IsActiveType>`
      width: 8vw;
      height: 25px;
      margin-right: 2vw;
      text-align: center;
      border-radius:7px;
      background-color: ${(props)=>(props.isActive?"#E9ECEF":"")};
      color: ${(props)=>(props.isActive?"#343A40":"#ADB5BD")};
`
const QuizTitleWrapper=styled.div`
margin-bottom: 2%;
`
const QuizTitleTitle=styled.div`
  
`
const QuizTitleInput=styled.input`
  font-size: 18px;
  width: 50vw;
  height: 30px;
  border: none;
  border-bottom: 1.5px solid ${Colors.gray3};
  &:focus{
    outline: none;
    border-bottom: 1.5px solid #42F08E;

  }
`
const MultichoiceForm=styled.div`
  .CorrectNumWords{
    color: ${Colors.black0};
  }
  .CorrectNumInputBox{
    width: 30px;
  }
  .MultichoiceFormWords{
    margin-bottom: 1.5%;
  }
`
const InQuizNum=styled.div`
  display: flex;
  margin-bottom: 1.2%; 
  position: relative;
  .num{
    ${flexCenter}
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${Colors.black2};
  }
  input{
    margin-left: 1%;
    width: 40%;
    height: 20px;
    border: none;
    border-bottom: 1.5px solid ${Colors.gray3};
    &:focus{
      outline: none;
      border-bottom: 1.5px solid #42F08E;

  }
  }
`
const CheckIcon=styled.svg.withConfig({
  shouldForwardProp:(prop)=>prop!=='isActive'
})<IsActiveType>`
position: absolute;
  top: -5px;
  width: 25px;
  height: 25px;
  fill:red;
  display: ${(prop)=>prop.isActive?"block":"none"};
`


const QuizNavBtnWrapper=styled.div`
  ${flexCenter}
  justify-content: space-evenly;
  width: 100%;
  height: 10%;
`

const QuizNavBtn=styled.div`
  width: 120px;
  height: 100%;
  ${flexCenter}
  border-radius: 8px;
  border: 1px solid ${Colors.gray2};
  padding: 1%;
  .words{
    ${flexCenter}
    width: 80%;
    /* background-color: #2f75b2; */
  }
  .IconWrapper{
    width: 20%;
    /* background-color: #697885; */
    ${flexCenter}
    svg{
      width: 15px;
      height:15px;
    }
  }
`
//useState의 set함수가 props로 들어올때는 타입을 지정 해줘야 한다.

// const quizBundle={}
interface PropsType{
  setCreateStep:React.Dispatch<React.SetStateAction<number>>
}

const CustomQuiz = ({setCreateStep}:PropsType)=> {
  //현재 퀴즈 번호
  const [currentQuizNum,setCurrentQuizNum]=useState<number>(1);
  const handleSetQuizNumDown=()=>{
    if (currentQuizNum>1)setCurrentQuizNum(currentQuizNum-1)
  }
  const handleSetQuizNumUp=()=>{
    if (currentQuizNum<quizLength) setCurrentQuizNum(currentQuizNum+1)
  }
  const InputCurrentQuizNum=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCurrentQuizNum(Number(e.target.value));

  }

  //전체 퀴즈 수
  const {quizLength}=useQuizLengthStore();
  //문제 유형
  const [quizType,setQuizType]=useState('객관식');
  //문제 제목
  const [quizTitle,setQuizTitle]=useState('');
  //문제 제목 세팅
  const handleQuizTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setQuizTitle(e.target.value);
    console.log(quizTitle);
  }
  //답안 작성
  const [rightNum,setRightNum]=useState<null|number>(null);
  const clickQuizNum=(n:number)=>{
    if(rightNum===n){
      setRightNum(null);
    }
    else{
      setRightNum(n);
    }
  }
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
            <QuizTypeBtnBundle className="QuizType"  >
              <QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="객관식"} onClick={()=>setQuizType('객관식')}>객관식</QuizTypeBtn>
              <QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="주관식"} onClick={()=>setQuizType('주관식')}>주관식</QuizTypeBtn>
              <QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="서술형"} onClick={()=>setQuizType('서술형')}>서술형</QuizTypeBtn>
            </QuizTypeBtnBundle>

            <QuizTitleWrapper>
              <QuizTitleTitle>문제 제목을 작성하세요</QuizTitleTitle>
              <QuizTitleInput type="text" value={quizTitle} onChange={handleQuizTitle}/>
            </QuizTitleWrapper>
            {quizType==='객관식'&&
              <MultichoiceForm>
                <div>
                  <div className="MultichoiceFormWords">문제를 작성하고 옆의 번호를 클릭하여 정답을 표시하세요</div>
                  {/* TODO: 문제 입력 input박스 늘리기, 정답인 input박스 색상 다르게 구현, 밑에 다음,이전문제,번호 입력칸 ui */}
                  <InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(1)} >1</div>
                      <CheckIcon onClick={()=>clickQuizNum(1)} isActive={rightNum===1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></CheckIcon>
                    </div>
                    <input type="text" />
                  </InQuizNum>
                  <InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(2)} >2</div>
                      <CheckIcon onClick={()=>clickQuizNum(2)} isActive={rightNum===2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></CheckIcon>
                    </div>
                    <input type="text" />
                  </InQuizNum>
                  <InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(3)}>3</div>
                      <CheckIcon onClick={()=>clickQuizNum(3)} isActive={rightNum===3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></CheckIcon>
                    </div>
                    <input type="text" />
                  </InQuizNum>
                  <InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(4)}>4</div>
                      <CheckIcon onClick={()=>clickQuizNum(4)} isActive={rightNum===4}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></CheckIcon>
                    </div>
                    <input type="text" />
                  </InQuizNum>
                  <InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(5)}>5</div>
                      <CheckIcon onClick={()=>clickQuizNum(5)}isActive={rightNum===5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></CheckIcon>
                    </div>
                    <input type="text" />
                  </InQuizNum>
                </div>
                {/* <div>
                  <div className="CorrectNumWords">정답번호를 입력하거나 문제 옆 번호를 클릭하세요</div> 
                  <input className="CorrectNumInputBox"type="text"/>
                </div> */}
              </MultichoiceForm>
            }
            {quizType==='주관식'&&
              <div>주관식</div>
            }
            {quizType==='서술형'&&
              <div>서술형</div>
            }
          </CustomQuizArea>
          <QuizNavBtnWrapper>
            
            <QuizNavBtn onClick={handleSetQuizNumDown}>
              <div className="IconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>              </div> 
              <div className="words">이전문제</div>  
            </QuizNavBtn>

            <input type="text" value={currentQuizNum} onChange={InputCurrentQuizNum}/>

            <QuizNavBtn onClick={handleSetQuizNumUp}>
              <div className="words">다음문제</div>  
              <div className="IconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </div>
            </QuizNavBtn>
          </QuizNavBtnWrapper>
      </CustomQuizAreaWrapper>

      <button onClick={()=>{setCreateStep(1)}}>처음으로</button>
      {currentQuizNum==quizLength&&<button onClick={()=>{setCreateStep(2)}}>생성 완료하기</button>}
    </CustomQuizWrapper>
  )
}

export default CustomQuiz