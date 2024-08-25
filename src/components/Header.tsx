import { useSetRecoilState } from "recoil"
import styled from "styled-components"
import { sideBarStateAtom } from "../recoil/sideBarStateAtom"
import useSelectedModal from "../hooks/useSelectedModal"
import { Link } from "react-router-dom"

const HeaderWrapper=styled.div`
    position: fixed;
    top: 1%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    font-family: 'SUIT-Regular';
    font-weight: 800;
    font-size: 22px;
`
const HeaderBody=styled.div`
    width: 50%;
    height: 100%;
    background: rgb(186,237,158);
    background: linear-gradient(90deg, rgba(186,237,158,1) 0%, rgba(149,229,184,1) 34%, rgba(149,211,229,1) 65%, rgba(141,168,224,1) 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 16px;
`
const HeaderIcons=styled.svg`
  width: 20px;
  height: 20px;
`
const Header = () => {
  //사이드 바 상태
  const setSideBar=useSetRecoilState(sideBarStateAtom);
  const clickSideBarAppear=()=>{
    setSideBar(true);
  }
  //모달 상태
  const {updateModalName}=useSelectedModal("login");
  return (
    <HeaderWrapper>
      <HeaderBody>
        <HeaderIcons onClick={clickSideBarAppear} xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
        </HeaderIcons>
        <Link to={'/'}>QuizZa</Link>
        <HeaderIcons onClick={updateModalName}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></HeaderIcons>
      </HeaderBody>
    </HeaderWrapper>
  )
}

export default Header