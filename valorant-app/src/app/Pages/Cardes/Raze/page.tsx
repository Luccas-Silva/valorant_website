
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";

export default function Raze() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Raze.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>DUELISTA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}