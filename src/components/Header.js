import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useState } from "react";

const HeaderComponent = () => {
  const [btnNameReact, setbtnameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {/* In react we use Link insted of anchor to navigate as Link  will not reload the page instead will just show different components in single page which makes it faster to render pages. Anchor will load the whole page*/}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnNameReact == "Login"
                  ? setbtnameReact("Logout")
                  : setbtnameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
