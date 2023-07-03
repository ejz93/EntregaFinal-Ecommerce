import React from "react";
import { NavLink } from "react-router-dom";
import CartView from "../Cart/CartWidgetView";
import "./NavBar.css";

const NavBar = () => {
  

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-warning">
      <div className="container-fluid d-flex">
          <NavLink to="/" className={"nav-link text-dark"}>
            <img
              className="d-inline-block align-text-center px-1"
              src="https://cdn-icons-png.flaticon.com/256/625/625058.png"
              alt=""
              width={50}
            />
            lemental
          </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-2 py-1 m-1 text-dark text-center"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink active="true" to="/category/cpu" className="dropdown-item">
                    CPU
                  </NavLink>
                </li>
                <li>
                  <NavLink active="true" to="/category/gpu" className="dropdown-item">
                    GPU
                  </NavLink>
                </li>
                <li>
                  <NavLink active="true" to="/category/mobo" className="dropdown-item">
                    MOBO
                  </NavLink>
                </li>
                <li>
                  <NavLink active="true" to="/category/ram" className="dropdown-item">
                    RAM
                  </NavLink>
                </li>
                <li>
                  <NavLink active="true" to="/category/psu" className="dropdown-item">
                    PSU
                  </NavLink>
                </li>
                <li>
                  <NavLink active="true" to="/category/ssd" className="dropdown-item">
                    SSD
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-1 p-1">
        <CartView />
      </div>
    </nav>
  );
};

export default NavBar;
