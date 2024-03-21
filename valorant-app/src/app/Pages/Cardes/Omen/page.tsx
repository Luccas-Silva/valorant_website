'use client'
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";
import { useEffect } from "react";

export default function Omen() {
    useEffect(() => {
        console.log("Renderizado Componente");
    }, []);
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Omen.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>CONTROLADOR</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}