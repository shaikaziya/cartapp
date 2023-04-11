import React from "react";

export default function Navbar({ cart, setCart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4.px-lg-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  payment
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-dark btn">
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/60/55/shopping-cart-icon-in-flat-style-symbol-vector-20616055.jpg"
                alt=""
              ></img>{" "}
              Cart{" "}
              <span className="badge badge-dark bg-dark rounded-pill">
                {cart}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
