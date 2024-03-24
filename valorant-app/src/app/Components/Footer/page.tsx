'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";
import dados from './links.json'

interface Dados {
    href : string;
    name : string;
}

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
                <Link className="" href="/" target="_blank">
                       
                </Link>
                <ul>
                    {
                        dados.map((link:Dados) =>(
                            <li><Link target="_blank" href={ link.href }>{ link.name } </Link></li>
                        ))
                    }
                </ul>
            </footer>
        </>
    );
}