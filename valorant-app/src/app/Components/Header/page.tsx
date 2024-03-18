import Link from "next/link";
import Image from "next/image";

import "./Header.css"; 

import Jogarbtn from "../JogarBTN/page";

export default function Header() {

    return (
        <>
            <nav>
                <Link className="" href="/">
                    <Image
                        src="/assets/V_Logomark_White.svg"
                        className="logo"
                        width={100}
                        height={100}
                        alt="Logo do Valorant"
                    />    
                </Link>
                <ul >
                    <li><Link href="#">AGENTES</Link></li>
                    <li><Link href="#">MAPAS</Link></li>
                    <li><Link href="#">ARSENAL</Link></li>
                    <li><Link href="#">NOTÍCIAS</Link></li>
                </ul>
                <Jogarbtn/>
            </nav>
        </>
    );
}