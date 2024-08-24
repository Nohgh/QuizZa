import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import styled from 'styled-components'
import ModalContainer from './components/ModalContainer/ModalContainer'
import useSetModal from './hooks/useSetModal'
import Test from './pages/Test'
import GlobalStyles from './GlobalStyles'
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
      <MainBody id='MainBodyWrapper' onClick={clickOutSideModal} modalState={modalState} >
    <GlobalStyles/>

        <ModalContainer modalRef={modalRef}/>
        <div id='MainBody'>
          <LeftBar/>
          <div id='Main'>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/test' element={<Test/>}></Route>
            </Routes>
          </div>
        </div>
      </MainBody>
    </>
  )
}

export default App
