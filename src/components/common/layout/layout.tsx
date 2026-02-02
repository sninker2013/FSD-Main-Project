import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import type React from "react";
import { StatusHeader } from "./status-header/StatusHeader";

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
            <StatusHeader
                status={status}
                updateStatus={updateStatus}
            />
            <Outlet />
            <Footer />
        </>
    )
}