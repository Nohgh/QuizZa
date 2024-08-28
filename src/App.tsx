import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Layout/Header'
import LeftBar from './components/Layout/LeftBar'
import ModalContainer from './components/Modal/ModalContainer/ModalContainer'
import useSetModal from './hooks/useSetModal'
import GlobalStyles from './styles/GlobalStyles'
import Quiz from './pages/Quiz/Quiz'
import QuizCreator from './pages/QuizCreeator/QuizCreator'
import QuizModifier from './pages/QuizModifier/QuizModifier'

// interface IsModalOpenType{
//   isModalOpen:boolean;
// }

// const MainBody = styled.div<IsModalOpenType>`
//   `

function App() {
  const {modalRef,clickOutSideModal}=useSetModal();
  return (
    <>
      <div id='MainBodyWrapper' onClick={clickOutSideModal} >
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
      </div>
    </>
  )
}

export default App
