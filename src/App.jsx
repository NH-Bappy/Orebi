
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './componants/Home'
import Shop from './pages/Shop';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

        <Route
      path="/"
      element={<Home/>}>
    </Route>
        <Route
      path="/shop"
      element={<Shop/>}>
    </Route>

    </>

  )
);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
