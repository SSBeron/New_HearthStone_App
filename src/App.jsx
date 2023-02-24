import { 
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
 } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout"
import Hearthstone from "./pages/cards/Hearthstone";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";


 const myRouter = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path="hearthstone" element={<Hearthstone />}/>

          <Route path="*" element={<NotFound />}/>
        </Route>
        )
      )

export default function App() {
  return (
      <RouterProvider router={myRouter} />
  )
}





