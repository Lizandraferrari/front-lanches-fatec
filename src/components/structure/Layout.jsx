import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import VLibras from "@djpfs/react-vlibras"; //ttps://www.npmjs.com/package/@djpfs/react-vlibras 

export default function Layout(){
    return (
        <>
            <Nav></Nav>
            <main style={{flexGrow:"1"}}>
                <Outlet />
            </main>
            <VLibras /> 
        </>
    )
}