"use client"

import Navbar from "./components/Navbar";


export default function LayoutContent({ 
    children 
}: { 
    children: React.ReactNode; 
}) {
    

    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}