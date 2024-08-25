
//useState의 set함수가 props로 들어올때는 타입을 지정 해줘야 한다.
interface PropsType{
    setCreateStep:React.Dispatch<React.SetStateAction<number>>
}

const CustomQuiz = ({setCreateStep}:PropsType)=> {
  return (
    <div>
        z퀴즈만들어보자~
        <button onClick={()=>{setCreateStep(1)}}>이전</button>
        <button onClick={()=>{setCreateStep(2)}}>다음</button>
    </div>
  )
}

export default CustomQuiz