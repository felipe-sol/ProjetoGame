import Produtos from "./Produtos"


const Home = ({Dados}) => {
  return (
    <div>
      {Dados.map((produto)=>{
        <Produtos
          key={produto.div}
          imagem={produto.imagem}
          titulo={produto.preco}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      })}
    </div>
  )
}

export default Home
