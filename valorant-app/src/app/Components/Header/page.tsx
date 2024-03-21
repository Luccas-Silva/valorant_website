'use client'
import Link from "next/link";
import Image from "next/image";

import "./Header.css"; 

import dados from './links.json'
import Jogarbtn from "../JogarBTN/page";
import { useEffect } from "react";

interface Dados {
    href : string;
    name : string;
}

export default function Header() {
    useEffect(() => {
        console.log("Renderizado Componente Header");
    }, []);

    return (
        <>
            <nav>
                <Link className="" href="/">
                    <Image
                        src="/assets/V_Logomark_White.svg"
                        className="logo"
                        width={100}
                        height={100}
                        alt="Logo do Valorant"
                    />    
                </Link>
                <ul >
                    {
                        dados.map((link:Dados) =>(
                            <li><Link href={ link.href }>{ link.name }</Link></li>
                        ))
                    }
                </ul>
                <Jogarbtn/>
            </nav>
        </>
    );
}