import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/foto cv croped.png"
//import 'bootstrap/scss/bootstrap.scss';

function MyNavbar(){

    return(
      <Navbar bg="dark" variant="dark" expand="md" style={{height:"10vh",position:"sticked",width:"100%"}}>
       <Container>

         <Navbar.Brand  href="/" style={{fontSize:'2rem',  fontFamily:'"papyrus", serif'}} >
         {' '}
        <img
          alt="io"
          src={logo}
          style={{marginLeft:'0.5rem', marginRight:'1rem'}}
          width="50"
          height="50"
          className="d-inline-block "
        />{' '}
     C.A. Carrucciu
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" style={{fontSize:'1rem'}} >
      <Nav.Link href="/work">Work</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/education">Education</Nav.Link>
      </Nav>
      </Navbar.Collapse>
     
   </Container>
      
        </Navbar>

    );
}

export default MyNavbar;