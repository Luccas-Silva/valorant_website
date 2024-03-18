
import Image from "next/image";
import "./page.css";
import Jogarbtn from "./Components/JogarBTN/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="inicio">
        <p className="txt-valorant">Um jogo de tiro tático 5x5 com personagens originais</p>
        <Image className="valorant" src="/assets/V_Logo_White.png" width={750} height={150} alt="Logo Valorant"/>
        <Jogarbtn/>
      </section>

      <h1 className="title"><hr/> NÓS SOMOS <br/> VALORANT</h1>

      <section className="somos">
        <div className="box-text">
          <h2>DESAFIE SEUS LIMITES</h2>
          <p>Misture o seu estilo e experiência em um cenário global e competitivo. Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!</p>
          <Link href="" target="_blank">
              <button>GUIA PARA INICIANTES</button>
          </Link>
        </div>
        <Image className="gameIMG" src="/assets/game_VALORANT.jpg" width={600} height={400} alt="game play"/>
      </section>

      <section className="agentes">
        <Image src="/assets/Agentes.svg" width={600} height={600} alt=""/>
        <div className="agente-text">
          <h1><hr/> SEUS <br/> AGENTES</h1>
          <h2>A CRIATIVIDADE É SUA MELHOR ARMA.</h2>
          <p>Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!</p>
          
          <Link href="" target="_blank">
              <button className="btn-agentes">VER TODOS OS AGENTES</button>
          </Link>
        </div>
      </section>

      <section className="agentes">
        <div className="agente-text">
          <h1><hr/> SEUS <br/> AGENTES</h1>
          <h2>A CRIATIVIDADE É SUA MELHOR ARMA.</h2>
          <p>Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!</p>
          
          <Link href="" target="_blank">
              <button className="btn-agentes">VER TODOS OS AGENTES</button>
          </Link>
        </div>
        <Image src="/assets/Agentes.svg" width={600} height={600} alt=""/>
      </section>

    </>
  );
}
