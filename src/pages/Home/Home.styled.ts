import { Link } from "react-router-dom"
import styled from "styled-components"
import imoge1 from "../../assets/img/이모지1.png"
import imoge2 from "../../assets/img/이모지2.png"
import imoge3 from "../../assets/img/이모지3.png"
import {flexJustCenter,flexColumnJustStart, flexColumnCenter} from "../../styles/Mixin"
// import useSelectedModal from "../hooks/useSelectedModal"

export const HomeWrapper=styled.div`
  font-family: 'SUIT-Regular';
  margin-top: calc(50px + 1%);
  width: 100%;
  height: 100%;
  ${flexJustCenter}
  /* 모달에서 overflow를 주는데 이를 풀기 위해서 auto로 정의 해줘야함 */
`
export const HomeBody=styled.div`
  padding-top:10%;
  width: 100%;
  display: flex;
  ${flexColumnJustStart}
`
export const HomeWords=styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5%;
`
export const QuizLinkBoxWrapper=styled.div`
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
  ${flexColumnCenter}
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
export const QuizStartBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(186,237,158,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(186,237,158,0.49);
  }
`
export const MakeQuizBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(149,211,229,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(149,211,229,0.49);
  }
`
export const ManageQuizBox=styled(BaseQuizBox)`
  &:hover{
    -webkit-box-shadow: 0px 0px 32px 10px rgba(141,168,224,0.49); 
    box-shadow: 0px 0px 32px 10px rgba(141,168,224,0.49);
  }
`
export const Imoge=styled.div`
@media only screen and (min-width: 1100px) {
    width: 150px;
    height: 150px;
}
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
`
export const Imoge1=styled(Imoge)`
  background-image: url(${imoge1});
`
export const Imoge2=styled(Imoge)`
  background-image: url(${imoge2});
`
export const Imoge3=styled(Imoge)`
  background-image: url(${imoge3});
`