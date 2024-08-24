import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import styled from 'styled-components'
import ModalContainer from './components/ModalContainer/ModalContainer'
import useModal from './hooks/useModal'
import LoginModal from './components/ModalComponents/LoginModal'

interface ModalStateType{
  modalState:boolean;
}

const MainBody = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'modalState'
})<ModalStateType>`
  overflow: ${(props) => props.modalState ? 'hidden' : 'auto'};`

const ModalComponent =LoginModal;

function App() {
  const {modalState,modalRef,clickOutSideModal}=useModal();
  return (
    <>
      <MainBody onClick={clickOutSideModal} modalState={modalState} id='MainBody'>
         {/* TODO: modalComponent에 모달 컴포넌트 지정하도록 코드화(변수 사용) */}
        <ModalContainer modalRef={modalRef} modalComponent={<ModalComponent />}/>
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
