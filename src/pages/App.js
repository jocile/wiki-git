
import { useState } from 'react';
import gitLogo from '../assets/github-mark-white.svg'
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'
import { api } from '../services/api'

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
        alert('Repositório já adicionado na lista!');
      }
    } catch (error) {
      alert('Repositório não encontrado ou ocorreu um erro na busca!');
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub Logo' />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />)}
    </Container>
  );
}

export default App;
