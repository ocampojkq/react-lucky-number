import React from "react";
import "./Layout.css";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text-warning">
              Home
            </Link>
          </li>
          <li>
            <Link to="/TwoDigits" className="text-primary">
              2 Digits
            </Link>
          </li>
          <li>
            <Link to="/ThreeDigits" className="text-danger">
              3 Digits
            </Link>
          </li>
          <li>
            <Link to="/FourDigits" className="text-success">
              4 Digits
            </Link>
          </li>
          <li>
            <Link to="/SixDigits" className="text-info">
              6 Digits
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
