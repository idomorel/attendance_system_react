
import React from 'react';
import {useState, useEffect} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Navbar, Nav, NavbarBrand, NavItem, NavLink, Button } from 'react-bootstrap';
import {List} from 'react-bootstrap-icons'
import logo from '../assets/TempLogo.png'
//import './BasePage.css'; // Make sure the CSS file is imported



function OffCanvasTopNav({show, handleClose, ...props}){


    return (
        <>
          <Offcanvas dir='rtl' className='offCanvasNav justify-content-center' show={show} onHide={handleClose} {...props} style={{height: "500px"}}>
            <Offcanvas.Header data-bs-theme="dark" dir='rtl' closeButton style={{margin: "10px"}} className='text-center justify-content-center'>
              <Offcanvas.Title>ברוך הבא, *להכניס שם של משתמש\אורח לפי STATE*</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='text-center'>
            <Nav variant='pills' defaultActiveKey="/home" className='justify-content-center'>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
            </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );

};
function OffCanvasSideNav({show, handleClose, ...props}){


    return (
        <>
          <Offcanvas dir='rtl' className='offCanvasNav' show={show} onHide={handleClose} {...props} style={{width: '300px'}}>
            <Offcanvas.Header closeButton dir='rtl'>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav variant='pills' defaultActiveKey="/home" className='justify-content-center'>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
                <NavItem className='w-100' style={{paddingRight: "20px", paddingLeft: "20px", paddingBottom: "10px"}}>
                    <NavLink href="/" className="nav-link-custom border">דף הבית</NavLink>
                </NavItem>
            </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );

};


const BasePage = ({children, ...props}) => {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    

    useEffect(() => {
        window.addEventListener("resize", () => 
        {setWidth(window.innerWidth);
          
          if (props.callbackFromParent2){
          props.callbackFromParent2(window.innerWidth);};
        });
    }, []);
    return(
        <>
        <div style={{background: props.background || "#222629"}}>
            <Navbar expand="false" className="navbar-custom">
                <Container fluid>
                    <NavbarBrand href="/" className="navbar-brand-custom">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{marginRight: '10px'}}
                        />
                    Attendance Manager
                    </NavbarBrand>
                    {/* <Button className="button-custom">Button Text</Button> */}
                    <Navbar.Toggle onClick={handleShow} aria-controls="basic-navbar-nav"><List color='#86C232' style={{marginBottom: '2px'}}/></Navbar.Toggle>
                    {/* <Button className="button-Toggle" onClick={handleShow} style={{marginRight: '5%'}}><List color='#86C232' style={{marginBottom: '4px'}}/></Button> */}
                </Container>
            </Navbar>
            <hr className='hr-custom'/>
        {/* </div> */}
        {width < breakpoint?
        <OffCanvasTopNav show={show} handleClose={handleClose} placement='top'/>:
        <OffCanvasSideNav show={show} handleClose={handleClose} placement='end'/>
        }

      <Container fluid className="content-container" style={{paddingLeft: "70px", paddingRight: "70px"}}>
        {children}
      </Container>

      <hr className='hr-custom'/>
      <footer className="footer-custom">
        <p>Version: {props.version}</p>
        <p>&copy; {new Date().getFullYear()} Ido Morel</p>
      </footer>
        </div>
        </>
    )
}




const BasePageOld = ({ children }) => {
  return (
    <>
    <div>

      {/* <Navbar expand="false" className="navbar-custom">
        <Container fluid>
          <NavbarBrand href="/" className="navbar-brand-custom">
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{marginRight: '10px'}}
            />
            SeferLink</NavbarBrand>
        <Button className="button-custom">Button Text</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav"><List color='#86C232' style={{marginBottom: '2px'}}/></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                <NavLink href="/" className="nav-link-custom">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" className="nav-link-custom">About</NavLink>
              </NavItem>
            </Nav>
            <Button className="button-custom">Button Text</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <hr className='hr-custom'/>
      </div>

      <Container className="content-container">
        {children}
      </Container>

      <footer className="footer-custom">
        <p>Version: 1.0</p>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </>
  );
};

export default BasePage;




// import React from 'react';
// import { Container, Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';
// import { House, InfoCircle } from 'react-bootstrap-icons'; // Import specific icons

// const BasePage = ({ children }) => {
//   return (
//     <>
//       <Navbar expand="lg" style={{ backgroundColor: '#89B9AD' }}>
//         <Container>
//           <NavbarBrand href="/" style={{ color: '#FFC5C5' }}>YourBrand</NavbarBrand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <NavItem>
//                 <NavLink href="/" style={{ color: '#FFEBD8' }}><House /> Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/about" style={{ color: '#FFEBD8' }}><InfoCircle /> About</NavLink>
//               </NavItem>
//               {/* Additional NavItems */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container style={{ backgroundColor: '#FFEBD8', minHeight: '80vh', padding: '20px', borderRadius: '5px' }}>
//         {children}
//       </Container>

//       <footer style={{ backgroundColor: '#C7DCCA', color: '#FFC5C5', padding: '20px', textAlign: 'center' }}>
//         <p>Version: 1.0</p>
//         <p>&copy; {new Date().getFullYear()} Your Company</p>
//       </footer>
//     </>
//   );
// };

// export default BasePage;



// import React from 'react';
// import { Container, Navbar, Nav } from 'react-bootstrap';

// const BasePage = ({ children, version }) => {
//   return (
//     <div className='body'>
//       <Navbar collapseOnSelect expand="lg" className="navbar-custom">
//         <Container>
//           <Navbar.Brand href="/" className='NavBrand'>YourBrand</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link className='NavItem' href="/page1">Page 1</Nav.Link>
//               <Nav.Link className='NavItem'href="/page2">Page 2</Nav.Link>
//               {/* More nav links */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className="my-3 content">
//         {children}
//       </Container>
    
        
//       <footer className="footer text-white text-center py-3">
//         <Container>
//           <p>Version: {version}</p>
//           <p>&copy; {new Date().getFullYear()} Your Company</p>
//         </Container>
//       </footer>
//       <footer className="footer1 text-white text-center py-3"></footer>
//     </div>
//   );
// };

// export default BasePage;