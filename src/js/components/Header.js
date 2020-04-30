import React from "react";

import { Link } from "react-router-dom";
import { clearPadawanLocalStorage } from "../utils/local-storage";
const Header = (props) => {
  const logout = () => {
    clearPadawanLocalStorage();
    window.location.href = "/login";
  };
  return (
    <header>
      <h1>{props.title}</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          {props.padawan ? (
            <li>
              <span>
                {props.padawan.first_name} {props.padawan.last_name}
              </span>
              <button onClick={() => logout()}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {props.padawan ? null : (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
      <button onClick={() => props.onChangeHeaderTitle("New header title")}>
        Change header title
      </button>
    </header>
  );
};

export default Header;
