import React from 'react' ;
import {Link} from 'react-router-dom' ;

const Navbar = () => {
  return (
    <div>
      <h1>
        <Link to="/login" style={{marginLeft:"25px"}}>Login</Link>
        <Link to="/register" style={{marginLeft:"25px"}}>Register</Link>
        <Link to="/myprofile" style={{marginLeft:"25px"}}>Myprofile</Link>
      </h1>
    </div>
  )
}

export default Navbar ;