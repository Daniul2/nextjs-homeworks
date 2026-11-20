import type {Metadata} from "next";
import React from "react";
import "./globals.css";
import {Menu} from "@/components/Menu";

export const metadata: Metadata = {
    title: 'HW1 — JSONPlaceholder',
};

type Props = { children: React.ReactNode };

const RootLayout = ({children}: Readonly<Props>) => {
    return (
        <html lang="en">
        <body>
        <Menu/>
        <main>{children}</main>
        </body>
        </html>
    );
};

export default RootLayout;
