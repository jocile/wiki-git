
import gitLogo from '../assets/github-mark-white.svg'
import Input from '../components/Input'

import { Container } from './styles';
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub Logo' />
      <Input />
    </Container>
  );
}

export default App;
