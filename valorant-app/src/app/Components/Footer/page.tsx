'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
    useEffect(() => {
        console.log("Renderizado Componente Footer");
    }, []);
    return (
        <>  
            <footer>
                <Link className="" href="/">
                    <Image
                        src="/assets/V_Logomark_White.svg"
                        className="logo"
                        width={100}
                        height={100}
                        alt="Logo do Valorant"
                    />    
                </Link>
                <ul>
                    <li>Nome: Luccas Silva - RM: 552890</li>
                    <li>Nome: Bruno Burian - RM: 552863</li>
                    <li>Nome: Leonardo Chaves - RM: 552707</li>
                </ul>
            </footer>
        </>
    );
}