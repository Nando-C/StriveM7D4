import { Component } from 'react'
import { Form, FormControl, Button, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }

    render() { 
        return ( 
            <Navbar bg="light" variant="light" expand="sm">
                <Link to='/'>
                    <Image className='brandLogo mr-3' src='https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/favourites'>Favourites</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavBar;