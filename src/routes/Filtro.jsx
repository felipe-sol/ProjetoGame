import {FiltroContainer} from '../styles/FiltroStyled'

const Filtro = ({titulo,opcoes,tipo,min,max, valor, onChange}) => {

return (

<FiltroContainer>

  <h3>{titulo}</h3>

  {tipo ==='range' ? (

    <input

    type="range"

    min={min}

    max={max}

    value={valor}

    onChange={(e)=> onChange(e.target.value)}/>

):(
  <ul>
    {opcoes.map((opcao)=>(
      <li key={opcao}>
      <a href="" onClick={(e)=>{e.preventDefault(); onChange(opcao);}}>
        {opcao}
      </a>
      </li>
))}
</ul>
)}
</FiltroContainer>
)}

export default Filtro
