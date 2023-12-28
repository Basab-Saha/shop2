import React from 'react';
import { Container, FormControl, Navbar, NavbarText, Dropdown } from 'react-bootstrap';



const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height:"80px"}}>
        <Container>
            <Navbar.Brand ><a>Shopping Cart</a></Navbar.Brand>
            <NavbarText className='search'>
                <FormControl placeholder='Search a Product' style={{width:"450px"}} className='mx-auto'/>
            </NavbarText>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth:"370px" , marginRight:"45px"}}>
                   <span style={{padding:"10" , width:"15px"}}>Cart is Empty</span>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
  )
}

export default Header