'use client'
import CardAgentes from '@/app/Components/CardAgentes/page';
import './Agentes.css'
import { useEffect } from 'react';


export default function Agentes() {
    useEffect(() => {
        console.log("Renderizado Componente Agentes page");
    }, []);
    
    return (
        <>    
            <section className="Agentes_inicio">
                <div className='Agentes_txt_inicio'>
                    <h2>// CONHEÇA A EQUIPE</h2>
                    <p>Encontre mais formas de plantar a Spike e enfrentar seus inimigos com lutadores, estrategistas e caçadores de todos os tipos.</p>
                    <hr/>
                </div> 
            </section> 
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}