'use client'
import Image from "next/image";
import Link from "next/link";
import imags from './imgs.json'
import './CardAgentes.css';
import { useEffect } from "react";

interface Imags {
    src : string;
    alt : string;
    href : string;
}

export default function CardAgentes() {
    useEffect(() => {
        console.log("Renderizado Componente Card Agente");
    }, []);
    return (
        <>  
            
            <section className="CardsAgentes">
                <h1><hr /> // ESCOLHA O SEU AGENTE</h1>
                {
                    imags.map((link:Imags) =>(
                        <Link href={ link.href }>
                            <Image className="CardAgente" src={link.src} width={150} height={150} alt={link.alt}/>
                        </Link>
                    ))
                }
            </section>
            
        </>
    );
}