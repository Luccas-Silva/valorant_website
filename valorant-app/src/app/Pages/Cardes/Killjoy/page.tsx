
import Image from "next/image";

import "../Cardes.css";

export default function Killjoy() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Killjoy.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>SENTINELA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}