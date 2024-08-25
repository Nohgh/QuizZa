import { Link } from "react-router-dom"
import styled from "styled-components"
import imoge1 from "../assets/img/이모지1.png"
import imoge2 from "../assets/img/이모지2.png"
import imoge3 from "../assets/img/이모지3.png"

// import useSelectedModal from "../hooks/useSelectedModal"

const HomeWrapper=styled.div`
  font-family: 'SUIT-Regular';

  margin-top: calc(50px + 1%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* 모달에서 overflow를 주는데 이를 풀기 위해서 auto로 정의 해줘야함 */
`
const HomeBody=styled.div`
  padding-top:10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const HomeWords=styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5%;
`
const QuizLinkBoxWrapper=styled.div`
 @media only screen and (min-width: 1100px){
  width: 60%;
 }
 @media only screen and (max-width: 1100px){
  width: 90%;
 }
 @media only screen and (max-width: 700px){
  width: 100%;
 }
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const BaseQuizBox =styled(Link)`
  width: 200px;
  height: 250px;
  border: 1px solid #edf0f3b2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms;
  font-size: 24px;
  img{
    width: 100px;
    height: 100px;
  }
  &:hover {
    transition: 400ms;
    font-size: 26px;
  }
`
const QuizStartBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(186,237,158,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(186,237,158,0.49);
  }
`
const MakeQuizBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(149,211,229,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(149,211,229,0.49);
  }
`
const ManageQuizBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(141,168,224,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(141,168,224,0.49);
  }
`
const Imoge=styled.div`
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover
`
const Imoge1=styled(Imoge)`
  background-image: url(${imoge1});
`
const Imoge2=styled(Imoge)`
  background-image: url(${imoge2});
`
const Imoge3=styled(Imoge)`
  background-image: url(${imoge3});
`
const Home = () => {
//  const {updateModalName}=useSelectedModal("default")
  return (
    <>
        <HomeWrapper>
            <HomeBody>
              {/* <button onClick={updateModalName}>default modal 생성</button> */}
              <HomeWords>
                효율적인 학습 도우미 QuizZa
              </HomeWords>
              <QuizLinkBoxWrapper>
                <QuizStartBox to={'/test'}>
                  <Imoge1></Imoge1>
                  Quiz 시작하기
                </QuizStartBox>
                <MakeQuizBox to={'/test'}>
                <Imoge2/>
                  Quiz 생성하기
                </MakeQuizBox>
                <ManageQuizBox to={'/test'}>
                <Imoge3/>
                  Quiz 관리하기
                </ManageQuizBox>
              </QuizLinkBoxWrapper>
            </HomeBody>
        </HomeWrapper>
    </>
  )
}

export default Home