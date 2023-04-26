import './App.css'
import { Container} from '@mui/material'
import Main from '../src/component/Main'
import { Routes, Route} from 'react-router-dom'
import User from '../src/component/User'

function App() {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element={<User/>}/>
      </Routes>
    </Container>
  );
}

export default App;
