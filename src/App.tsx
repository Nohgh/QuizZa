import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { modalStateAtom } from './recoil/modalStateAtom'
import { useRef } from 'react'

interface ModalStateType{
  modalState:boolean;
}

const MainBody = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'modalState'
})<ModalStateType>`
  overflow: ${(props) => props.modalState ? 'auto' : 'auto'};
`

const ModalWrapper=styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'modalState'
})<ModalStateType>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #5757574b;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  display: ${(props)=>props.modalState?'flex':'none'};
`
const ModalBodyWrapper=styled.div`
  overflow: hidden;
  background-color:white;
  width:300px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  const [modalState,setModalState]=useRecoilState(modalStateAtom);
  
  const modalRef=useRef(null);
  const clickOutSideModal=(e: React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
    if (modalRef.current ===e.target) setModalState(false);
  }
  return (
    <>
      <MainBody onClick={clickOutSideModal} modalState={modalState} id='MainBody'>
        <ModalWrapper ref={modalRef} modalState={modalState} >
          <ModalBodyWrapper >
            <button onClick={()=>setModalState(false)}>❌</button>
            모달
          </ModalBodyWrapper>
        </ModalWrapper>
        <LeftBar/>
        <div id='RightBody'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </MainBody>
    </>
  )
}

export default App
