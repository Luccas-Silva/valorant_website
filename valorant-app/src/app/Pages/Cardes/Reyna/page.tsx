
import Image from "next/image";

import "../Cardes.css";

export default function Reyna() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Reyna.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>DUELISTA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}