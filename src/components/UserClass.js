// This is just to get the idea how React used to work earlier using classes
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // State is a keyword work similar like usestate
    //   count1: 0,
    //   count2: 1,
    // };

    console.log(this.props.name + "child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name, "child component did mount called");
  }

  render() {
    console.log(this.props.name, "child render called");
    const { name, location } = this.props;
    // const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h2>Count1: {count1}</h2> */}
        {/* <h2>Count2: {count2}</h2> */}

        {/* <button
          onClick={() => {
            this.setState({
              // setState is a keyword to update the state
              count1: this.state.count1 + 1,
              count2: this.state.count2 - 1,
            });
          }}
        >
          Change Count
        </button> */}

        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
