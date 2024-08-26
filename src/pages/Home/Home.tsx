import * as H from './Home.styled'; //import할 요소가 많지 않다면 distructing사용

const Home = () => {
  return (
    <>
        <H.HomeWrapper>
            <H.HomeBody>
              <H.HomeWords>
                효율적인 학습 도우미 QuizZa
              </H.HomeWords>
              <H.QuizLinkBoxWrapper>
                <H.QuizStartBox to={'/quizes'}>
                  <H.Imoge1></H.Imoge1>
                  Quiz 시작하기
                </H.QuizStartBox>
                <H.MakeQuizBox to={'/creator'}>
                <H.Imoge2/>
                  Quiz 생성하기
                </H.MakeQuizBox>
                <H.ManageQuizBox to={'/modifier'}>
                <H.Imoge3/>
                  Quiz 관리하기
                </H.ManageQuizBox>
              </H.QuizLinkBoxWrapper>
            </H.HomeBody>
        </H.HomeWrapper>
    </>
  )
}

export default Home