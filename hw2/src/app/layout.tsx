import type {Metadata} from "next";
import {ReactNode} from "react";
import {Menu} from "@/components/Menu";

export const metadata: Metadata = {
    title: 'Cars',
    description: 'NextJS HW2 — cars',
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="pl">
        <body style={{fontFamily: 'sans-serif', margin: 0}}>
        <Menu/>
        <main style={{padding: 16}}>{children}</main>
        </body>
        </html>
    );
}
