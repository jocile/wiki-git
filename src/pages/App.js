
import gitLogo from '../assets/github-mark-white.svg'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'

import { Container } from './styles';
function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub Logo' />
      <Input />
      <ItemRepo />    
    </Container>
  );
}

export default App;
