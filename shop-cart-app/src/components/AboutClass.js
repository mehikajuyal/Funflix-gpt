import React from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

class AboutComponent extends React.Component {
  constructor() {
    console.log("Parent Constructor");
    super();
    this.state = {
      userInfo: {
        name: "dummyname",
        location: "dummylocation",
      },
    };
  }

  componentDidMount() {
    console.log("Parent Did Mount Called");
    this.fetchUsers();
  }

  async fetchUsers() {
    const data = await fetch("https://api.github.com/users/hmundeepi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("users***", json);
  }

  render() {
    console.log("Parent Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="container">
        <img src={avatar_url}></img>
        <h1>About Us</h1>
        <h4>Welcome to About Us Page</h4>
        <UserContext.Consumer>
          {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass name={name} location={location} />
        {/* <UserClass name={"Himanshu Mundeepi"} location={"Gurgaon"} /> */}
      </div>
    );
  }
}

export default AboutComponent;
