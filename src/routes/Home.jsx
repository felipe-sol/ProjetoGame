import Produtos from "./Produtos"


const Home = ({Dados}) => {
  return (
    <Main>
      {Dados.map((produto)=>(
        <Produtos
          key={produto.id}
          imagem={produto.imagem}
          titulo={produto.preco}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      ))}
    </Main>
  )
}

export default Home
