
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";

export default function Sova() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Sova.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>INICIADOR</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}