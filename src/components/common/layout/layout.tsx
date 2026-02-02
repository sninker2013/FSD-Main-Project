import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import type React from "react";

export function Layout({
        status,
        updateStatus
    }:
    {
        status: string,
        updateStatus: React.Dispatch<React.SetStateAction<string>>
    }) {
    return (
        <>
            <Header 
                status={status}
                updateStatus={updateStatus}
            />
            <Outlet />
            <Footer />
        </>
    )
}