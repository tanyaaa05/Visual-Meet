import React from "react";
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <p>Contact us @:</p>
      <div className="social-icons">
        <a href="#TS">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/google-logo.png"
            alt="Google"
          />
        </a>
        <a href="#TS">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a href="#TS">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a href="#TS">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png"
            alt="Twitter"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
