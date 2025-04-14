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

export default GlobalStyle