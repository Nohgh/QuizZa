import styled from "styled-components"
import { Colors } from "../../styles/Colors"
import { flexCenter } from "../../styles/Mixin"
import { useToastStore } from "../../store/useToastStore"

const MainToastWrapper=styled.div`
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX( -50% );
    width: 300px;
    height: 50px;
    background-color: ${Colors.gray5};
    border-radius: 150px;
    ${flexCenter}
    color: white;
`
const MainTost = () => {
const {toastOpen}=useToastStore();

  return (
    <>
    {toastOpen &&
    <MainToastWrapper>
        <div></div>
        <div>메세지</div>
        <div></div>
    </MainToastWrapper>}
    </>
   
  )
}

export default MainTost