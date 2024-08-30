import styled from "styled-components"
import { useLeftBarStore } from "../../store/useLeftBarStore"

interface SideStateType{
    isLeftBarOpen:boolean
}
const SideBarWrapper=styled.div.withConfig({
    shouldForwardProp:(prop)=>prop !== 'isLeftBarOpen'
})<SideStateType>`
    //z-index로 header보다 상단에 위치시켜 접기 버튼 활성
    z-index:2; 
    position:sticky;
    top:0;
    //
    width: ${(props)=> props.isLeftBarOpen?'10vw':'none'};
    height: 100vh;
    display: flex;
    align-items: center;

    `

const SideBar=styled.div`
    background-color: rgba(239, 239, 239, 0.517);
    width: 10vw;
    height:100%;
    display: flex; 
    flex-direction: column;
    align-items: center;

`
const ShortSideBar=styled.div`

    width: 20px;
    height:85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 60ms;
    svg{
            display: none;
        }
    &:hover{
        svg{
            display: block;
        }
        box-shadow: 0 1px 2px rgba(0,0,0,0.19), 0 1px 5px rgba(0,0,0,0.23);
        background-color: rgba(239, 239, 239, 0.517);
        width: 10vw;
        height:85%;
        transition: 60ms;
        border-radius: 0px 10px 10px 0px;
    }
`
const LeftIcon=styled.svg`
    position: relative;
    left: 20%;
    margin-top: 10%;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const LeftBar = () => {
    const {isLeftBarOpen,setIsLeftBarOpen}=useLeftBarStore();
    const clickCloseSideBar=()=>{
        setIsLeftBarOpen(false);
    }
    const clickOpenSideBar=()=>{
        setIsLeftBarOpen(true);
    }
    return (
        <SideBarWrapper isLeftBarOpen={isLeftBarOpen}>
            {isLeftBarOpen &&
            <SideBar >
                {/* <button onClick={clickCloseSideBar}>닫기</button> */}
                <LeftIcon  onClick={clickCloseSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></LeftIcon>
            
            </SideBar>
            }
            {!isLeftBarOpen &&
                <ShortSideBar>
                    <LeftIcon onClick={clickOpenSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></LeftIcon>
                </ShortSideBar>
            }
        </SideBarWrapper>
    )
}

export default LeftBar