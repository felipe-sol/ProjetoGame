import React from 'react'
import { FooterContainer } from '../styles/FooterStyled'

const Footer = () => {
  return (
  <>
    <div className='contato'>
      <h3>Contato</h3>
      <p>Email:contato@email.com</p>
      <p>Telefone:(11) 94444-3333</p>
    </div>
    <div className='direitos'>
      <p>&copy; 2025 - City Gmae - Todos os Direitos Reservados</p>
    </div>

    <div className='redes-sociais'>
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </>
  )
}

export default Footer
