import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from '../components/Navbar.jsx'
import BodyComponent from "../components/BodyComponent.jsx"
import Footer from "../components/Footer.jsx"


function App() {
  
const [statez, setState] = useState(0)





 
  return (
    <>
    <NavbarComponent />
    <BodyComponent />
    <Footer />

    </>
  )
}

export default App
