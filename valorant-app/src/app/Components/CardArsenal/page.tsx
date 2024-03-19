import Image from "next/image";

import './CardArsenal.css';

export default function CardArsenal() {
    return (
        <>  
            <section className="CardsArsenal">
                <h1>{}</h1>
                <Image className="" src={"/assets/Property 1=Classic.svg"} width={600} height={300} alt={""}/>
                <p>{}</p>
            </section>    
        </>
    );
}