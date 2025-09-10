// This is just to get the idea how React used to work earlier using classes
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // State is a keyword work similar like usestate
      count1: 0,
      count2: 1,
    };

    console.log(this.props.name + "child constructor called");
  }

  componentDidMount() {
    // This will be only called on component initial render.
    console.log(this.props.name, "child component did mount called");

    this.timer = setInterval(() => {
      console.log(
        "Hey class component timer, remember to clean me inside componentwillunmount"
      );
    }, 1000);
  }

  componentDidUpdate(prevprops, prevstate) {
    // This will be called after a state variable update after render. So, if we want to call something , or do something when state variable update then
    // it should be done inside componentDidUpdate - as componentDidMount is called only on intial render after that componentDidUpdate is called.

    if (this.state.count1 !== prevstate.count1) {
      // code
    }

    if (this.state.count2 !== prevstate.count2) {
      // code
    }
  }

  componentWillUnmount() {
    // This is called when the component is destroyed , when we navigate to other pages.
    // So, any cleaning is done inside this hook - like we do inside return in useEffect hook.

    clearInterval(this.timer);
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
