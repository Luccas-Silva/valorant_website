
import Image from "next/image";

import "../Cardes.css";

export default function Jett() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Jett.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>DUELISTA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}