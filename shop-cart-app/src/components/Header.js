import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [btnNameReact, setbtnameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext)
  console.log({ loggedInUser })
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between shadow-m bg-yellow-100 mb-6">
      <div className="w-30 m-1 shadow-lg">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex items-center">
          <li className="px-4">
            {/* <h4 className="online-status"> */}
            Online status: {onlineStatus ? "✅" : "🛑"}
            {/* </h4> */}
          </li>
          <li className="px-4">
            {/* In react we use Link insted of anchor to navigate as Link  will not reload the page instead will just show different components in single page which makes it faster to render pages. Anchor will load the whole page*/}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart"> Cart - ({cartItems?.length + ' items'})</Link>

          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <button
              className="border border-white-200 bg-green-400 p-2 font-light cursor-pointer"
              onClick={() => {
                btnNameReact == "Login"
                  ? setbtnameReact("Logout")
                  : setbtnameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4" >
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
