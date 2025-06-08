import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home"
import Layout from "@/components/structure/Layout";
import Lanches from "@/pages/Lanches";
import Bomboniere from "./pages/Bomboniere";

export default function Routes (){
      const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {                
                    path:"/" ,
                    element: <Home />,
                },
                {
                    path:"/lanches",
                    element: <Lanches />,
                },
                {
                    path:"/bomboniere",
                    element: <Bomboniere />,
                }
            ],
         }
  ])
  return <RouterProvider router={router} />
}