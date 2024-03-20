import "./Mapas.css"; 
import Image from "next/image";
import dados from "./mapas.json";

interface dados {
    src : string;
    alt : string;
}

export default function Mapas() {

    return (
        <>  
            <h1>MAPAS</h1>
            <section>
                    {dados.map ((item : dados) =>(
                        <Image src={item.src} width={800} height={450} alt={item.alt} />
                    ))}
                    
            </section>
        </>
    );
}