import { Header } from "./components/Header/Header";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Context } from './contexts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { CreateStock } from "./components/pages/CreateStock/CreateStock";
export function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <DefaultLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/create-stock",
        element: <CreateStock/>,
      }
    ]
  }]);

  return (
    <Context>
      <RouterProvider router={router}/>
    </Context>
  );
}