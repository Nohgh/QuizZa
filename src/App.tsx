import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import styled from 'styled-components'
import ModalContainer from './components/ModalContainer/ModalContainer'
import useSetModal from './hooks/useSetModal'

interface ModalStateType{
  modalState:boolean;
}

const MainBody = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'modalState'
})<ModalStateType>`
  overflow: ${(props) => props.modalState ? 'hidden' : 'auto'};`


function App() {
  const {modalState,modalRef,clickOutSideModal}=useSetModal();
  return (
    <>
      <MainBody id='MainBody' onClick={clickOutSideModal} modalState={modalState} >
        <ModalContainer modalRef={modalRef}/>
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
