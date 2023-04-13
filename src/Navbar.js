import './Styles.css'
import React, {useState} from 'react'
function Navbar (props) {
  const [clicked, setClicked] = useState(false);

 
    return (
      <div className="menu-container">
        <li className={`menu-Lists ${clicked? 'active':'inactive'}`}  onClick={() => {setClicked(!clicked)}}>
          <img src={props.img} alt=""></img>
          <h3>{props.text}</h3>
        </li>
    </div>
    )

  }
  export default Navbar;