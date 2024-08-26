import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Layout/Header'
import LeftBar from './components/Layout/LeftBar'
import styled from 'styled-components'
import ModalContainer from './components/Modal/ModalContainer/ModalContainer'
import useSetModal from './hooks/useSetModal'
import GlobalStyles from './styles/GlobalStyles'
import Quiz from './pages/Quiz/Quiz'
import QuizCreator from './pages/QuizCreeator/QuizCreator'
import QuizModifier from './pages/QuizModifier/QuizModifier'

interface IsModalOpenType{
  isModalOpen:boolean;
}

const MainBody = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isModalOpen'
})<IsModalOpenType>`
  overflow: ${(props) => props.isModalOpen ? 'hidden' : 'auto'};`

function App() {
  const {isModalOpen,modalRef,clickOutSideModal}=useSetModal();
  return (
    <>
      <MainBody id='MainBodyWrapper' onClick={clickOutSideModal} isModalOpen={isModalOpen}>
        <GlobalStyles/>
        <ModalContainer modalRef={modalRef}/>
        <div id='MainBody'>
          <LeftBar/>
          <div id='Main'>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/quizes' element={<Quiz/>}></Route>
              <Route path='/creator' element={<QuizCreator/>}></Route>
              <Route path='/modifier' element={<QuizModifier/>}></Route>
            </Routes>
          </div>
        </div>
      </MainBody>
    </>
  )
}

export default App
