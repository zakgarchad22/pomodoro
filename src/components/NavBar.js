
import React from 'react';
import '../App.css';
const NavBar = ({ changeMode }) => 
{

  return (
    <div className="NavBar">
      <div className = "up-button-container">
      <button className="waves-effect waves-light btn light-blue lighten-4" onClick={() => changeMode('work')}>
        WORK MODE
      </button>
      <button className="waves-effect waves-light btn light-blue lighten-4" onClick={() => changeMode('break')}>
        BREAK MODE
      </button>
      </div>
    </div>
  )
}
export default NavBar;