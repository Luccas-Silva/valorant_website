'use client'
import "./Mapas.css"; 
import Image from "next/image";
import dados from "./mapas.json";
import { useEffect } from "react";
interface dados {
    nome : string;
    src : string;
    alt : string;
    text : string;
}

export default function Mapas() {
    useEffect(() => {
        console.log("Renderizado Componente");
    }, []);

    return (
        <>  
                <h1 className="mapas-title"><hr/>// MAPAS</h1>
                {dados.map ((item : dados) =>(
                    <section className="mapas-card">
                        <Image className="mapas-imgs" src={item.src} width={800} height={450} alt={item.alt} />
                        <div className="mapas-text">
                            <h2>{item.nome}</h2>
                            <p>{item.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias ducimus, delectus odio enim quae in. Vitae dolorum ut, ad quasi nobis perspiciatis dolorem voluptatibus, a laboriosam reiciendis impedit animi.</p>
                        </div>
                    </section>
                ))}
                    
            
        </>
    );
}