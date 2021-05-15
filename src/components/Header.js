import React, {useState, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {useAuth} from '../Context/AuthContext'

const Header = ({history}) => {
  let user;
  if(localStorage.getItem('login')){
    user = localStorage.getItem('login').split('@')[0];
  }

  const {logout} = useAuth()
  const SubmitHandler = async() => {
    try {
      await logout()
      localStorage.removeItem('login')
      history.push('/')
    } catch {
      console.log('Error');
    }
    
  }
  // console.log(userLogin.userInfo)
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/dashboard'>
            <Navbar.Brand>Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto' style={{ marginLeft:"auto" }}>
            <NavDropdown title={user}>
                  <NavDropdown.Item onClick={SubmitHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
