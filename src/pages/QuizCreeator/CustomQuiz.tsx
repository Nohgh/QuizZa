import {  useState } from "react";
import { useQuizLengthStore } from "../../store/useQuizLengthStore"

import * as Q from './CustomQuiz.styled'


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
    const inputN=Number(e.target.value)
    if ( inputN<=quizLength ){
      setCurrentQuizNum(inputN);}
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
  //타이머 설정
  const [QuizTime,setQuizTime]=useState({
    min:0,
    sec:0
  })
  return (
    <Q.CustomQuizWrapper>
      <Q.ProgressBarWrapper>
        <Q.ProgressBar currentParsent={Number((currentQuizNum/quizLength)*100)} >
          <div>
          {currentQuizNum}/{quizLength}
          </div>
        </Q.ProgressBar>
      </Q.ProgressBarWrapper>

      <Q.CustomQuizAreaWrapper>
          <Q.CustomQuizArea>
            <Q.QuizTypeBtnBundle className="QuizType"  >
              <Q.QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="객관식"} onClick={()=>setQuizType('객관식')}>객관식</Q.QuizTypeBtn>
              <Q.QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="주관식"} onClick={()=>setQuizType('주관식')}>주관식</Q.QuizTypeBtn>
              <Q.QuizTypeBtn className="QuizTypeBtn" isActive={quizType==="서술형"} onClick={()=>setQuizType('서술형')}>서술형</Q.QuizTypeBtn>
            </Q.QuizTypeBtnBundle>
            <Q.QuizTitleWrapper>
              <Q.QuizTitleTitle>{currentQuizNum}번의 문제 제목을 작성하세요</Q.QuizTitleTitle>
              <Q.QuizTitleInput type="text" value={quizTitle} onChange={handleQuizTitle}/>
            </Q.QuizTitleWrapper>
            {quizType==='객관식'&&
              <Q.MultichoiceForm>
                <div>
                  <div className="MultichoiceFormWords">보기를 작성하고 옆의 번호를 클릭하여 정답을 표시하세요</div>
                  {/* TODO: 문제 입력 input박스 늘리기, 정답인 input박스 색상 다르게 구현, 밑에 다음,이전문제,번호 입력칸 ui */}
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(1)} >1</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(1)} isActive={rightNum===1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" />
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(2)} >2</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(2)} isActive={rightNum===2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" />
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(3)}>3</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(3)} isActive={rightNum===3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" />
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(4)}>4</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(4)} isActive={rightNum===4}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" />
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(5)}>5</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(5)}isActive={rightNum===5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" />
                  </Q.InQuizNum>
                  

                </div>
                <Q.TimerWrapper>
                  <Q.TimeUpBtnBunddle>
                    <div className="TimeUp">+1</div>
                    <div className="TimeUp">+1</div>
                  </Q.TimeUpBtnBunddle>
                  <Q.ShowTimeWrapper>
                    <div className="QuizTime">{QuizTime.min}분</div>
                    <div className="QuizTime">{QuizTime.sec}초</div>
                  </Q.ShowTimeWrapper>
                  <Q.TimeDownBtnBunddle>
                    <div className="TimeDown">-1</div>
                    <div className="TimeDown">-1</div>
                  </Q.TimeDownBtnBunddle>
                </Q.TimerWrapper>
              </Q.MultichoiceForm>
            }
            {quizType==='주관식'&&
              <div>주관식</div>
            }
            {quizType==='서술형'&&
              <div>서술형</div>
            }
          </Q.CustomQuizArea>
          <Q.QuizNavBtnWrapper>
            
            <Q.QuizNavBtn onClick={handleSetQuizNumDown}>
              <div className="IconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>              </div> 
              <div className="words">이전문제</div>  
            </Q.QuizNavBtn>

            <input className="CurrntNumInputBOx" type="text" value={currentQuizNum} onChange={InputCurrentQuizNum}/>
            <Q.QuizNavBtn onClick={handleSetQuizNumUp}>
              <div className="words">다음문제</div>  
              <div className="IconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </div>
            </Q.QuizNavBtn>
          </Q.QuizNavBtnWrapper>
      </Q.CustomQuizAreaWrapper>
      <Q.UnderQuizBtnWrapper >
        <Q.ResizeLengthBtn onClick={()=>{setCreateStep(0)}}>문제 다시 세팅하기</Q.ResizeLengthBtn>
        {currentQuizNum==quizLength&&
        <Q.QuizDoneBtn onClick={()=>{setCreateStep(2)}}>생성 완료하기</Q.QuizDoneBtn>}
      </Q.UnderQuizBtnWrapper>
   
    </Q.CustomQuizWrapper>
  )
}

export default CustomQuiz