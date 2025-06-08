import Header from "@/components/header";
import Seletor from "../components/structure/Seletor";
import QRCode from "react-qr-code";

export default function Home(){
    const options = ['Fatec Mauá']
    return (
        <>
            <Header
                title="Fatec Lanches"
                subtitle="Evite filas na cantina. Compre online e retire com sua senha."
            ></Header>
            <form style={{marginTop:"3em"}}>
                <Seletor
                    label={"Para continuar selecione sua unidade:"}
                    options={options}
                ></Seletor>
                <button type="submit">Buscar</button>
            </form>

            <div 
                className="flex-coluna" 
                style={{  
                    gap: "2em",
                    margin: "2em auto",
                    width: "60%"
                }}
            >
                <QRCode 
                    value="" 
                    aria-label="Código QR para download do aplicativo"
                ></QRCode>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Para maior comodidade nos dispositivos android, recomendamos o download de nosso aplicativo pelo QR Code ou clicando aqui
                </a>
            </div>
        </>
    )
}