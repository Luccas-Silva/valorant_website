
import Image from "next/image";

import "../Cardes.css";

export default function Cypher() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Cypher.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>SENTINELA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}