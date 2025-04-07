import { useState } from 'react'
import Login from './routes/Login'
import Error from './routes/Error'
import Jogador from './routes/Jogador'
import Home from './routes/Home'
import Aside from './routes/Aside'
import Footer from '.components/Footer'
import Header from '.components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/filtro" element={<Filtro/>}/>
            <Route path="/jogador" element={<Jogador/>}/>
        </Routes>
        <Aside/>
        <Footer/>
      </Router>
      <Aside/>
    </>
  )
}

export default App
