import {  useRecoilState } from "recoil"
import styled from "styled-components"
import { sideBarStateAtom } from "../recoil/sideBarStateAtom"

interface SideStateType{
    sideState:boolean
}
const SideBarWrapper=styled.div.withConfig({
    shouldForwardProp:(prop)=>prop !== 'sideState'
})<SideStateType>`
    width: 100px;
    height: 100vh;
    background-color: #fdfdfd;
    display: flex;
    align-items: center;
    display: ${(props)=> props.sideState?'flex':'none'}; 
    `
const SideBar=styled.div`
    background-color: rgba(239, 239, 239, 0.517);
    width: 100%;
    height:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LeftIcon=styled.svg`
    position: relative;
    left: 20%;
    margin-top: 10%;
    width: 20px;
    height: 20px;
`
const LeftBar = () => {
    const [sideState,setSideState]=useRecoilState(sideBarStateAtom);
    const clickCloseSideBar=()=>{
        setSideState(false);
    }

    return (
        <SideBarWrapper sideState={sideState}>
            {sideState &&
            <SideBar>
                {/* <button onClick={clickCloseSideBar}>닫기</button> */}
                <LeftIcon  onClick={clickCloseSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></LeftIcon>
            
            </SideBar>}
        </SideBarWrapper>
    )
}

export default LeftBar