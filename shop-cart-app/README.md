# Learn-react

Learning React and coding

# Parcel

- Dev Build
- Local Server
- HMR -Hot Module Replacement
- File watching Algorithms - written in C++
- Caching - Faster builds - .parcel-cache
- Image Optimisation
- In production builds minification
- Bundling
- Compress
- Consistent hashing
- Code splitting
- Differential bundling
- Support older browsers
- Diagnostic of your app
- Error handling
- HTTPS
- Tree shaking - remove unused code
- Different Dev and Prod bundles

# JSX

- JSX do cross side scripting attack by itself - i.e it sanitises each data that is passed to it. i.e you can pass anything to React freely

suppose const data = api.getData();

const HeadingComponent = () => (

  <div id="container">
    <Title />
    {data}
    <h2>{100 + 200}</h2>
    {heading}
    <h1>Hello I am rendering React Component</h1>
  </div>
);

here if getData passes any malicious code to your site.
then JSX will sanitises it and then it gets rendered to html.

# Folder structer for Food App

/\*\*

- Header
- - Logo\*
- - Nav Items
- Body
- - Search
- - Restaurant Container
-     - Restaurant Card
- Footer
- - Copyrights
- - Links
- - Address
- - Contact
    \*\*/

# Two types of export/import

- Default Export/import
  export default Component;
  import Component from 'path';

- Named Export/import
  export Const Component;
  import {Component} from 'path';

  # React Hooks

  (Normal JS Utility Functions)

- useState() - Superpowerful state Variables in React
- useEffect()

# UseEffect hook

- IF NO DEPENDENCY ARRAY - use effect is called on every component render.
  useEffect(() => {
  fetchData();
  });
- When depency array - use effect is called only on initial render. It will not called again when any use sate element is called.
  useEffect(() => {
  fetchData();
  }, []);
- When we put something inthe dependency - then use effect is called everytime the dependency is changed.
  useEffect(() => {
  fetchData();
  }, [valueSearched]);

# Cleaning in React - Similar to ngOnDestroy in angular (In functional Components)

- This is done inside useEffect hook - using return function inside useEffect we can put our cleaning code.
- For eg. If we use setInterval inside useEffect it will stay till we do not clean it on the component change, as
  we are building SPA , so the page do not get refreshed , as a result setInterval stay active even if we navigate
  to other pages.
  So, in order to destroy it while navigating to other pages - we have return function inside useEffect hook.

  useEffect(() => {
  fetchData();
  const timer = setInterval(() => {
  console.log("Set Interval");
  });

  // This return function inside useEffect is to clear everything on component destroy, like we have ngDestroy in angular
  return () => {
  clearInterval(timer);
  };
  }, []);

  # 3 stages in React Lifecycle hooks

  - Mounting , Updating and Unmounting

  - Mounting - constructor, Render , componentDidMount
  - Updating - render, componentDidUpdate
  - Unmounting - componentWillUnmount

- Render Phase - constructor and render is called
- Commit Phase - componentDidMount, componentDidUpdate, componentWillUnmount

# Added all the css to index.copy.css and component.copy folder , made custom hooks useonlinestatus and useRestaurantmenu.js.

- Now we will be using tailwind.

# High order functions are used to enhance the component/function. High order functions are Pure functions i.e they do not modify directly anything passed to it.

High order functions are the functions who takes the component, enhances that component and returns back.

# Controlled and Uncontrolled components -

- Controlled components - when the parent is controlling the state (power/function) of child component then it is called controlled component.
- Uncontrolled components - when the child have its own state (power/function) than it is called uncontrolled component.

# Props drilling - passing props in a tree structure component i.e from parent to child to its child and so on.

# Context - To avoid props drilling we use context - The data which is required at multiple places that data we can keep in context and use it from anywhere. For eg - Logged in user data , this could be use by multiple components at multiple places .

- In props drilling there might be chances that some components in between are not using that data but still we are passing the data through it as it is required by some child.

- How to declare userContext =>
-

- How to use it inside Functional Components(Standard way)
- const {loggedInUser} = useContext(UserContext);

- How to use it inside class based Components
- <UserContext.Consumer>{({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>} </UserContext.Consumer>

- If we want to update the Context data
   <UserContext.Provider value={{loggedInUser: userName, setUserName}}></UserContext.Provider> 
   This is done at root level - App.js
   and wherever we want to use the logged in user value we will wrap it around that .
    return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="appLayout">
      <HeaderComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider>
  );

- If we want to update the loggedinuser value from somewhere else in the application, we will use state variable setUserName to update it... check in Body.js fle.

# REDUX (Stores) - (redux-toolkit.js - modern way of writing redux) - (vanilla redux - old way of writing)
(other stores - Zustand)
- handling state of our application, our application become easier to debug.
- Redux Tool Kit (RTK) helps us to debug application.
- Write data - When you hit the add button it DISPATCHES an action which calls the REDUCER function which updates the slice of our redux store and our data is updated.
- Read data from the cart - we use SELECTOR - phenomenon is called subscribing to the store using selector - it is in sync with the store. 

# REDUX TOOL KIT (RTK)
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch(action)
- Selector
   