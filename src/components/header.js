import React from 'react'
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <div className="header-content">
        <h1>Visual Meet</h1>
        {/* <Link to="/login" className="login-button">login</Link> */}
      </div>

      <div className="main-content">
        <h2>
          Unbounded <span className="highlight">Connections &nbsp;</span>
          Elevate<br /> Your Meetings with Free, HD<br /> Future-Forward  &nbsp;
          <span className="highlight">Video  Conferencing</span>!!
        </h2>

        <p>
          Revolutionize your meetings with our cutting-edge, future-forward
          video conferencing platform. Experience seamless collaboration,
          crystal-clear audio, and HD video, all at zero-cost..!! Elevate your
          virtual communication and connect without boundaries today!
        </p>
        {/* <Link to="/SecretSociety" className="join-now">Create Meet</Link> */}
        <Link to="/visualmeet" className="join-now">Create Meet</Link>
      </div>
    </header>
  )
}

export default Header
