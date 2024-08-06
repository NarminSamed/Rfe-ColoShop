import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Home from "./pages/Home/index.jsx";
import ProductDetail from "./pages/DetailPage/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx"
import Products from "./pages/Product/index.jsx";
import AddProducts from "./pages/AddProduct/index.jsx";
import {CardProvider} from "./context/Card.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "addproducts",
        element: <AddProducts/>,
      },
     
      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
]);

function App() {
  return (
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  );
}

export default App;
