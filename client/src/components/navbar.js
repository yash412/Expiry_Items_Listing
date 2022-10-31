import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" sty href="/Login">
              Expiry Items Listing
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Login">
                  <button type="button" class="btn btn-success">Log in</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Register">
                    <button type="button" class="btn btn-success">Sign up</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
