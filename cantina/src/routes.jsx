import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./components/structure/Layout";

export default function Routes (){
      const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {                
                    path:"/" ,
                    element: <Home />,
                },
            ],
         }
  ])
  return <RouterProvider router={router} />
}