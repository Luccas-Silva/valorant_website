'use client'
import Link from "next/link";

import "./JogarBTN.css";
import { useEffect } from "react";

export default function Jogarbtn() {
    useEffect(() => {
        console.log("Renderizado Componente");
    }, []);
    return (
        <>  
            <Link href="https://playvalorant.com/pt-br/" target="_blank">
                <button>JOGUE AGORA</button>
            </Link>
            
        </>
    );
}