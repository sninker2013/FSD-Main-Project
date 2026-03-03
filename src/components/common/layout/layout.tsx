import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { StatusHeader } from "./header/status-header/StatusHeader";

export function Layout() {
    return (
        <>
            <StatusHeader />
            <Outlet />
            <Footer />
        </>
    )
}