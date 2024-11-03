import "./Navbar.css"
import { useEffect, useState } from "react";
import { useReducer } from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, NavLink } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { useRef } from "react";
import { Fade as Hamburger } from 'hamburger-react'
import Logow from "../src/assets/images/logow.png"
import Logob from "../src/assets/images/logob.png"

const reducer = (state, action) => {

  switch(action.type){
    case "TOGGLE":
      return {expandedState:state.expandedState, toggleState:!(state.toggleState)};
  
    case "EXPAND":
       return {expandedState:!(state.expandedState), toggleState:state.toggleState};
    
    default:
      return state;
    }

 }

 
 
function NavbarComponent(){ 
  const [state, dispatch] = useReducer(reducer, {expandedState:false, toggleState:false})
  const [breakpoint, changeBreakpoint] = useState()
 

const navbarStyle = useRef()
const logoStyle = useRef()
const navLinks = useRef()


useEffect(()=>{window.addEventListener("scroll", ()=>{


if (window.scrollY == 0){
  
  navbarStyle.current.style = "background: rgba(255, 255, 255, 0.2);"
  logoStyle.current.style.backgroundImage = `url("logow.png")`;

}

else {
  logoStyle.current.style.backgroundImage = `url("logob.png")`;
  navbarStyle.current.style = "background: rgba(255, 255, 255, 1);"
}





})},[])




useEffect(()=>{
  
  (window.innerWidth <= 992)?changeBreakpoint(false):changeBreakpoint(true);
  window.addEventListener("resize",()=>{if (window.innerWidth <= 576) {changeBreakpoint(false)} else changeBreakpoint(true)})})

return(<>


              <Container id="menu" className={breakpoint?"d-none" : ""}  >
               <Hamburger size={18} onToggle={toggled => {if (toggled){
                   dispatch({type: "EXPAND"})
                    }
                   else
                   dispatch({type: "EXPAND"})
                    }} />
               </Container>

<Navbar ref={navbarStyle} expanded={state.expandedState} collapseOnSelect expand={breakpoint} className="fadebg" fixed="top">
          

              

          <Nav className="Frame">
              <Navbar.Brand href="#home"><div ref={logoStyle} style={breakpoint?{ backgroundSize: "210px"}:{backgroundSize: "140px"}} id="logo"></div>
               </Navbar.Brand>

             
          <Navbar.Collapse className="NavLinks">
               <Nav.Item className="ms-auto">
               <Nav.Link href="#about">About</Nav.Link>
               </Nav.Item>
              
               <Nav.Item>
               <Nav.Link  href="#projects">Projects</Nav.Link>
               </Nav.Item>

               <Nav.Item>
               <Nav.Link href="#contact">Contact</Nav.Link>
               </Nav.Item>
          </Navbar.Collapse>
            
        
          </Nav>

         
         
</Navbar>

</>
)


}

export default NavbarComponent;