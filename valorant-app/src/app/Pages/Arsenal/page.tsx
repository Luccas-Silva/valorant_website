
import CardArsenal from "@/app/Components/CardArsenal/page";
import "./Arsenal.css"

export default function Arsenal() {
    return (
        <>  
            <section className="Arsenal-title">
                <h1><hr/>ESCOLHA A SUA<br/>ARMA</h1>
            </section>
            <section className="Arsenal-cards">
                <CardArsenal/>   
            </section>
            
        </>
    );
}