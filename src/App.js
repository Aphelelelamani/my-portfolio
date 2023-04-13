import React, {useState,useRef,useEffect}from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import './Styles.css'
import Home from './Home'
import Portfolio from './Portfolio'
import list from './Images/list .svg'
import house from './Images/house.svg'
import book from './Images/book.svg'
import logo from './Images/Logo.png'
import Navbar from './Navbar'



function App() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    
  <div className="App" >
    
    <div className="header" >
    <ul className='menu-Large' >
      <Link className='NavLink' to="/Home">
            <Navbar img={house} text={"HOME"} />
          </Link>
          <Link className='NavLink' to="/Portfolio">
             <Navbar img ={book} text={"MY PORTFOLIO"} />
          </Link>
      </ul>
    </div>

    <div className="menu-container">
    <img className="Logo"src={logo} alt=""></img>
     <div className="menu-trigger" ref={menuRef} onClick={() => {setOpen(!open)}}>
      <img className="menuIcon" src={list} alt=""></img>
     </div>
     
    <div className={`menu ${ open? 'active' : 'inactive'}`}>
        <ul>
         <Link className='NavLink' to="/Home">
            <MenuItem img={house} text={"HOME"} />
          </Link>
          <Link className='NavLink' to="/Portfolio">
             <MenuItem img ={book} text={"MY PORTFOLIO"} />
          </Link>
        </ul>
    </div>
    </div>

      <Routes>
        <Route path="/home" element={<Home/>}>

        </Route>
        <Route path="/Portfolio" element={<Portfolio/>}>

        </Route>
      </Routes>
     </div>
  );
}


function MenuItem (props) {
  return (
      <li>
        <img src={props.img} alt=""></img>
        <h3>{props.text}</h3>
      </li>
  )
}
export default App;
