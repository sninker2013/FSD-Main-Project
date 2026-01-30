import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Landing } from "../../pages/Landing";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}