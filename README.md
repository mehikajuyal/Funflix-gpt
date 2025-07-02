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
