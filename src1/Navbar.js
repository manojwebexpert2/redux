import React from 'react';
import {Link} from 'react-router-dom';
const NavBar=()=>(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/' className="navbar-brand" >Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link" >About</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
)
export default NavBar;