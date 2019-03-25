import React, { Component } from "react";
// import styled from "styled-components";

//Navbar Styling

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-lg fixed-top navbarstyle"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand brand-properties" href="#page-top">
              Sneaker Colle¢t
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              type="button"
              data-toogle="collapse"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="nav navbar-nav ml-auto text-uppercase">
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link js-scroll-trigger" href="/">
                    Users
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link js-scroll-trigger" href="/">
                    About
                  </a>
                </li>
                {/* <li class="nav-item" role="presentation">
                  <a class="nav-link js-scroll-trigger" href="/">
                    Thank You
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link js-scroll-trigger" href="/">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;