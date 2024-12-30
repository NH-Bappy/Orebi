
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./componants/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import RootLayout from "./componants/RootLayout";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Sign_up from "./pages/Sign_up";
import Checkout from "./pages/Checkout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
  <Route>
    <Route path="/" element={<RootLayout/>}>
    <Route
        path="/"
        element={<Home/>}>
      </Route>

      <Route
        path="Shop"
        element={<Shop/>}>
      </Route>

      <Route
        path="About"
        element={<About/>}>
      </Route>

      <Route
        path="Contacts"
        element={<Contacts/>}>
      </Route>

      <Route
        path="Account"
        element={<Account/>}>
      </Route>

      <Route
        path="cart"
        element={<Cart/>}>
      </Route>

      <Route
        path="MyAccount"
        element={<MyAccount/>}>
      </Route>

      <Route
        path="Sign_up"
        element={<Sign_up/>}>
      </Route>

      <Route
        path="Checkout"
        element={<Checkout/>}>
      </Route>

      <Route
        path="*"
        element={<Error/>}>
      </Route>

    </Route>
  </Route>

      
    </>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
