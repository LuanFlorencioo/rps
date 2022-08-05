import Logo from '../assets/Logo.svg';
import Score from './Score';
import Rules from './Rules';
import { Container, Header, Main, Footer } from './styles/App.styles';

import Box from './styles/Box.style';

const App = () => {
  return (
    <Container>

      <Header>
        <img src={Logo} alt="Rock Paper Scissors" />
        <Score />
      </Header>

      <Main>
        <Box></Box>
      </Main>

      <Footer>
        <Rules />
      </Footer>

    </Container>
  )
}

export default App