import { useState } from 'react'
import Login from './routes/Login'
import Error from './routes/Error'
import Jogador from './routes/Jogador'
import Home from './routes/Home'
import Aside from './routes/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Dados from './Data/dados.json'
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle `
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background:#f4f4f4;   
  }
  #container{
    display-flex;
    flex-direction:column;
    min-height:100vh;
  }

  #content-wraper{
    display:grid;
    grid-template-column:1fr 200px;
    gap:20px;
    flex:1;
  }

@media (max-width:768px){
  #content-wrap{
    grid-template:column: 1fr;
  }
  aside{
    display:block;
    width:100%;
  }
}
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home Dados={Dados}/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/filtro" element={<Filtro/>}/>
            <Route path="/jogador" element={<Jogador/>}/>
            <Route path="/jogador" element={<Produtos/>}/>
        </Routes>
        <Aside/>
        <Footer/>
      </Router>
      <Aside/>
    </>
  )
}

export default App
