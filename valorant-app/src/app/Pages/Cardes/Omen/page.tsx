
import Image from "next/image";

import "../Cardes.css";

export default function Omen() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Omen.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>CONTROLADOR</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}