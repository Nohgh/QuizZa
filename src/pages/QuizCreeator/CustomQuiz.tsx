import {  useState } from "react";
import { useQuizLengthStore } from "../../store/useQuizLengthStore"

import * as Q from './CustomQuiz.styled'


//useState의 set함수가 props로 들어올때는 타입을 지정 해줘야 한다.

// const quizBundle={}
interface PropsType{
  setCreateStep:React.Dispatch<React.SetStateAction<number>>
}
// interface QuizTimeType{
//     min:number;
//     sec:number;
// }
const CustomQuiz = ({setCreateStep}:PropsType)=> {
  //현재 퀴즈 번호
  const [currentQuizNum,setCurrentQuizNum]=useState<number>(1);
  //현재 퀴즈 번호 다운
  const handleSetQuizNumDown=()=>{
    if (currentQuizNum>1){
      //1. 현재 form 서버로 post
      currentFormRest()//2.현재 폼 리셋
      //3. 다음(이전) 번호 저장된 값 있는지 확인하여 있으면 가져오기
      setCurrentQuizNum(currentQuizNum-1)
    }
  }
//현재 퀴즈 번호 업
  const handleSetQuizNumUp=()=>{
    if (currentQuizNum<quizLength){
      // TODO: 퀴즈 번호 업데이트

      //1. 현재 form 서버로 post
      currentFormRest()//2.현재 폼 리셋
      //3. 다음(이전) 번호 저장된 값 있는지 확인하여 있으면 가져오기
      setCurrentQuizNum(currentQuizNum+1)
    }//4.다음(이전) 번호로 이동
  }
  /**문제 이동 전 후 현재 폼 리셋 */
  const currentFormRest=()=>{
    setQuizTitle(''); //문제 유형에 종속도지 않음 
    if(quizType==="객관식"){
      setQuizType("객관식");
      setChoices({
        choice1:"",
        choice2:"",
        choice3:"",
        choice4:"",
        choice5:""});
      setRightNum(null);
    };
  }
//현재 퀴즈 번호 입력하여 조정
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
  //문제 보기
  const [choices,setChoices]=useState({
    choice1:"",
    choice2:"",
    choice3:"",
    choice4:"",
    choice5:"",
  });
  //문제 보기 세팅
  const handleChoices=(e:React.ChangeEvent<HTMLInputElement>,choice:string)=>{
    for(const key in choices){
      if(key===choice){
        console.log(key)
        setChoices((prev)=>({
          ...prev,
          [key]:e.target.value //객체 키 세팅은 []내부에 담아주기
        }));
        console.log(choices);
      }
    }
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
  //주관식, 서술식 답안
  const [shortAnswer,setShortAnswer]=useState("");
  const handleShortAnswer=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setShortAnswer(e.target.value);
  }
  const [longAnswer,setLongAnswer]=useState("");
  const handleLongAnswer=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setLongAnswer(e.target.value);
  }
  const [autoChecking,setAutoChecking]=useState(false);
  //타이머 설정
  // const [QuizTime,setQuizTime]=useState<QuizTimeType>({
  //   min:0,
  //   sec:0
  // })
  // const clickUpTime=()=>{
  //   //이렇게 하는 이유는 useState에서 세팅한 객체 모두를 업데이트 해야하기 떄문에 
  //   setQuizTime((prev)=>({
  //     ...prev,
  //     min:prev.min+1 //전 값에 +1 시킨다.
  //   }));
  // }
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
        {/*TODO: CustomQuizArea 레벨에서 한 문제 단위 관리가 되어야함  */}
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
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(1)} >1</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(1)} isActive={rightNum===1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" value={choices.choice1} onChange={(e)=>handleChoices(e,"choice1")}/>
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(2)} >2</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(2)} isActive={rightNum===2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" value={choices.choice2} onChange={(e)=>handleChoices(e,"choice2")}/>
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(3)}>3</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(3)} isActive={rightNum===3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" value={choices.choice3} onChange={(e)=>handleChoices(e,"choice3")}/>
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(4)}>4</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(4)} isActive={rightNum===4}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" value={choices.choice4} onChange={(e)=>handleChoices(e,"choice4")}/>
                  </Q.InQuizNum>
                  <Q.InQuizNum>
                    <div>
                      <div className="num" onClick={()=>clickQuizNum(5)}>5</div>
                      <Q.CheckIcon onClick={()=>clickQuizNum(5)}isActive={rightNum===5} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></Q.CheckIcon>
                    </div>
                    <input type="text" value={choices.choice5} onChange={(e)=>handleChoices(e,"choice5")}/>
                  </Q.InQuizNum>
                </div>
                {/* TODO: 타이머 만들긴 했지만 적용할지는 미지수 , 시간 조정 함수  */}
                {/* QuizTime */}
                {/* <Q.TimerWrapper>
                  <Q.TimeUpBtnBunddle>
                    <div className="TimeUp" onClick={clickUpTime}>+1</div>
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
                </Q.TimerWrapper> */}
              </Q.MultichoiceForm>
            }
            {quizType==='주관식'&&
              <Q.ShortAnswerWrapper>
                <div>주관식 답안을 작성해 주세요</div>
                <Q.ShortAnswerInput type="text" value={shortAnswer} onChange={handleShortAnswer}/>
                <Q.ShortAnswerToggleWrapper>
                  <Q.ShortAnswerToggleWords>
                    <div className="autoCheckingWord">자동 채점</div>
                  </Q.ShortAnswerToggleWords>
                  <Q.ShortAnswerToggle autoChecking={autoChecking} onClick={()=>setAutoChecking(!autoChecking)}>
                    <div className="firstToggle" ></div>
                  </Q.ShortAnswerToggle>
                </Q.ShortAnswerToggleWrapper>
              </Q.ShortAnswerWrapper>
            }
            {quizType==='서술형'&&
              <Q.LognAnswerWrapper>
                <div>서술식 답안을 작성해 주세요</div>
                <Q.LongAnswerInput value={longAnswer} onChange={handleLongAnswer}/>
                <Q.ShortAnswerToggleWrapper>
                  <Q.ShortAnswerToggleWords>
                    <div className="autoCheckingWord">자동 채점</div>
                  </Q.ShortAnswerToggleWords>
                  <Q.ShortAnswerToggle autoChecking={autoChecking} onClick={()=>setAutoChecking(!autoChecking)}>
                    <div className="firstToggle" ></div>
                  </Q.ShortAnswerToggle>
                </Q.ShortAnswerToggleWrapper>
              </Q.LognAnswerWrapper>
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
        {/* TODO: 두개의 버튼 클릭시 모달로 취소 확인 누르고 이동할 수 있게 구현하기 */}
        <Q.ResizeLengthBtn onClick={()=>{setCreateStep(0)}}>문제 수 다시 세팅</Q.ResizeLengthBtn>
        {currentQuizNum==quizLength&&
        <Q.QuizDoneBtn onClick={()=>{setCreateStep(2)}}>생성 완료하기</Q.QuizDoneBtn>}
      </Q.UnderQuizBtnWrapper>
    </Q.CustomQuizWrapper>
  )
}

export default CustomQuiz