import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home"
import Layout from "@/components/structure/Layout";
import Lanches from "@/pages/Lanches";
import Bomboniere from "./pages/Bomboniere";
import Pagamento from "./pages/Pagamento";
import Bebidas from "./pages/Bebidas";

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
                },
                {
                    path:"/pagamento",
                    element: <Pagamento />,
                },
                 {
                    path:"/Bebidas",
                    element: <Bebidas />,
                }
            ],
         }
  ])
  return <RouterProvider router={router} />
}