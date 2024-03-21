'use client'
import CardArsenal from "@/app/Components/CardArsenal/page";
import "./Arsenal.css"
import { useEffect } from "react";

export default function Arsenal() {
    useEffect(() => {
        console.log("Renderizado Componente Arsenal page");
    }, []);
    
    return (
        <>  
            <section className="Arsenal-title">
                <h1><hr/>ESCOLHA A SUA<br/>ARMA</h1>
            </section>
            <section className="Arsenal-cards">
                <CardArsenal/>   
            </section>
            
        </>
    );
}