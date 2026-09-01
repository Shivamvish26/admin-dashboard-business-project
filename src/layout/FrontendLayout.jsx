import React from "react";
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";

export default function FrontendLayout({children}){
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>   
        </div>
    )
}