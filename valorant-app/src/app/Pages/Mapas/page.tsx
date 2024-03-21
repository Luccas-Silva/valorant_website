'use client'
import "./Mapas.css"; 
import Image from "next/image";
import dados from "./mapas.json";
import { useEffect, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


interface dados {
    id : number;
    nome : string;
    src : string;
    alt : string;
    text : string;
}

export default function Mapas() {
    const [slidesPerView, setSlidesPerView] = useState(1)
    useEffect(() => {
        console.log("Renderizado Componente Mapas page");
    }, []);

    return (
        <>  
                <h1 className="mapas-title"><hr/>// MAPAS</h1>

                <Swiper
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {dados.map ((item : dados) =>(
                        <SwiperSlide key={item.id}>
                            <section className="mapas-card">
                                <Image className="mapas-imgs" src={item.src} width={800} height={450} alt={item.alt} />
                                <div className="mapas-text">
                                    <h2>{item.nome}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </>
        
    );
}