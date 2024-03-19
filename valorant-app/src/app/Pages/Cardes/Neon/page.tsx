
import Image from "next/image";

import "../Cardes.css";

export default function Neon() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Neon.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>DUELISTA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}