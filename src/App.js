import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}></Route>
//     <Route path='/products' element={<ProductsPage />}></Route>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinition)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
