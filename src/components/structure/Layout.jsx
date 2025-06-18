import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import VLibras from "@djpfs/react-vlibras"; //ttps://www.npmjs.com/package/@djpfs/react-vlibras 
import FuncionalidadesAcessibilidade from "./itensNav/funcionalidadesAcessibilidade";

export default function Layout(){
    return (
        <>
            <Nav></Nav>
            <FuncionalidadesAcessibilidade />
            <main style={{flexGrow:"1"}}>
                <Outlet />
            </main>
            <VLibras /> 
        </>
    )
}