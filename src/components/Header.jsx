import React from 'react'
import {Link} from 'react-dom-router'
import{HeaderContainer, Nav} from '../styles/HeaderStyled'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link>Acessórios</Link></li>
          <li><Link></Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>

  )
}

export default Header
