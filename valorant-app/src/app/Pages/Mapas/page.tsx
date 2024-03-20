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
                <h1 className="mapas-title"><hr/>// MAPAS</h1>
                {dados.map ((item : dados) =>(
                    <section className="mapas-card">
                        <Image src={item.src} width={800} height={450} alt={item.alt} />
                        <div className="mapas-text">
                            <h2>01.Ascent</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur mollitia, debitis deleniti molestiae ducimus quod consequuntur sapiente, quas animi quo modi neque. Quod pariatur eaque cum dolores molestias rerum.</p>
                        </div>
                    </section>
                ))}
                    
            
        </>
    );
}