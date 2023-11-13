'use client'
import "reflect-metadata"
import './globals.css'
import React from "react";
import {ModuleContext} from "@/app/di/component/ModuleContext";
import {GlobalModule} from "@/app/di/config/GlobalModule";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ModuleContext module={GlobalModule} />
                {children}
            </body>
        </html>
    )
}
