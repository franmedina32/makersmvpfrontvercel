import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { GrTechnology } from 'react-icons/gr'
import '../styles/navbarStyle.css'
const NavbarComp = () => {
  return (
    <div>
        <Navbar>
            <Container fluid>
                <h1 className='title'>BLOCKSAVVY<GrTechnology/></h1>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='navbar'>
                        <Nav.Item className='navitem' as={Link} to='/'>User</Nav.Item>
                        <Nav.Item className='navitem' as={Link} to='/home'>Home</Nav.Item>
                        <Nav.Link className='navitem' as={Link} to='/favs'>Favs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  )
}

export default NavbarComp