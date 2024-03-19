
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";

export default function Sage() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Sage.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>SENTINELA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}