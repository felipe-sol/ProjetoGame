import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './routes/Login'
import Error from './routes/Error'
import Jogador from './routes/Jogador'
import Home from './routes/Home'
import Aside from './routes/Aside'
import Footer from './components/Footer'
import Filtro from './routes/Filtro'
import Header from './components/Header'
import Dados from './Data/dados.json'
import GlobalStyle from './styles/GlobalStyles'
import Produtos from './routes/Produtos'



function App() {

  return (
    <>
      <Router>
        <GlobalStyle/>
        <div id="container">
        <Header/>
        <div id='content-wraper'></div>
        <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home Dados={Dados}/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/filtro" element={<Filtro/>}/>
            <Route path="/jogador" element={<Jogador/>}/>
            <Route path="/jogador" element={<Produtos/>}/>
        </Routes>
        <Aside/>
        </div>
        <Footer/>
      </Router>
      <Aside/>
    </>
  )
}

export default App


