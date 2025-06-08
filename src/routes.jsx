import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home"
import Layout from "@/components/structure/Layout";
import Lanches from "@/pages/Lanches";

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
            ],
         }
  ])
  return <RouterProvider router={router} />
}