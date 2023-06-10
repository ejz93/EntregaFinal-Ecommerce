import React from "react";
import { NavLink } from "react-router-dom";
import CartView from "../Cart/CartWidgetView";

const NavBar = (props) => {
  // const { navbar_items } = props;

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-warning">
      <div className="container-fluid navbar navbar-light navbar-brand">
        <p>
          <NavLink to="/" className={"nav-link text-dark"}>
            <img
              className="d-inline-block align-text-center px-1"
              src="https://cdn-icons-png.flaticon.com/256/625/625058.png"
              alt=""
              width={50}
            />
            lemental
          </NavLink>
        </p>
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
            {/* <li className="nav-item">
              <NavLink to="/checkout" className={"nav-link"}>
                Checkout
              </NavLink>
            </li> */}
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </p>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
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
