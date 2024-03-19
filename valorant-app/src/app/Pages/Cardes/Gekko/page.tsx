
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";

export default function Gekko() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Gekko.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>INICIADOR</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}