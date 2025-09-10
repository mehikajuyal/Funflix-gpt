import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutComponent from "./src/components/AboutClass";
import ContactComponent from "./src/components/Contact";
import ErrorComponent from "./src/components/Error";
import { Outlet } from "react-router";
import RestaurantMenuComponent from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/Store/appStore";
import CartComponent from "./src/components/CartComponent";

// Actuall createReact Element which is very chaotic.
// const parent = React.createElement('h1', {},"Hello World" );
// const parent = React.createElement("div", { id: "parent", key: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1", key: "heading1" },
//       "This is heading 1"
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2", key: "heading2" },
//       "This is heading 2"
//     ),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement(
//       "h3",
//       { id: "heading3", key: "heading3" },
//       "This is heading 3"
//     ),
//     React.createElement(
//       "h4",
//       { id: "heading4", key: "heading4" },
//       "This is heading 9"
//     ),
//   ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// <!-------------------------------------------------------!>

// using React element

// const heading = (
//   <h1 className="head" tabIndex="5">
//     Hello React !!
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <!-------------------------------------------------------------!>

// using React Functional Component (Moder way of doing)

// const Title = () => {
//   return <h1>Hello World from React Component !!</h1>;
// };

// Component Composition

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h2>{100 + 200}</h2>
//     {heading}
//     <h1>Hello I am rendering React Component</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

/*************** Creating a Food App *******************/

const AppLayout = () => {
const [userName, setUserName] = useState();
useEffect(() => {
  const data = {name: 'Mehika Juyal'};
  setUserName(data.name);
}, [] )

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="appLayout">
      <HeaderComponent />
      {/* <BodyComponent /> */}
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/restaurantmenu/:restId",
        element: <RestaurantMenuComponent />,
      },
      {
        path: "/cart",
        element: <CartComponent></CartComponent>
      }
    ],
    errorElement: <ErrorComponent />,
  },
  //   {
  //     path: "/about",
  //     element: <AboutComponent />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <ContactComponent />,
  //   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
