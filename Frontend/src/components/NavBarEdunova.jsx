
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';

export default function NavBarEdunova(){

    const navigate = useNavigate(); // U pravilu ; ne treba

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand className='ruka'
                onClick={()=>navigate(RouteNames.HOME)}
                >Restoran APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="http://mandicnikola29-001-site1.ltempurl.com/swagger/index.html" target='_blank'>Swagger</Nav.Link>
                    <NavDropdown title="Programi" id="basic-nav-dropdown">
                        <NavDropdown.Item

                        onClick={()=>navigate(RouteNames.KONOBAR_PREGLED)}

                        >Konobari</NavDropdown.Item>
                       
                        
                       
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}