import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Vlibras from "../vlibras";

export default function Layout(){
    return (
        <div style={{minHeight:"100%" , display:"flex" , width:"100%" , flexDirection:"column"}}>
            <Nav></Nav>
            <main style={{flexGrow:"1"}}>
                <Outlet />
            </main>
            <Vlibras />
        </div>
    )
}