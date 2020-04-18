import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-block ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
                <Link className="nav-item nav-link" to="/"> Home </Link>
                <Link className="nav-item nav-link" to="/login"> Login </Link>
            </div>
          </div>          
      </nav>
    );
  };


  export default Navbar;