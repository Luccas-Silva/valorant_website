import Image from "next/image";

import imags from './imgs.json'

import './CardAgentes.css';

interface Imags {
    src : string;
    alt : string;
}

export default function CardAgentes() {
    return (
        <>  
            
            <section className="CardsAgentes">
            <h1><hr /> // ESCOLHA O SEU AGENTE</h1>
                {
                    imags.map((link:Imags) =>(
                        <Image className="CardAgente" src={link.src} width={150} height={150} alt={link.alt}/>
                    ))
                }
            </section>
            
        </>
    );
}