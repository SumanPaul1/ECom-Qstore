import {
  createBrowserRouter, RouterProvider, Route, Outlet
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  }
])

const App = () => {
  return (
      <div className="main-app">
        <RouterProvider router={router} />
      </div>
    );
};

export default App;