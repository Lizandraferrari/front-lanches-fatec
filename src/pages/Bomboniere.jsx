import bala from "@/assets/bomboniere/bala.jpg";
import balacanela from "@/assets/bomboniere/balacanela.jpg";
import fofura from "@/assets/bomboniere/fofura.jpg";
import mm from "@/assets/bomboniere/mm.jpg";
import pacoca from "@/assets/bomboniere/pacoca.webp";
import twix from "@/assets/bomboniere/twix.jpg";
import Categoria from "@/components/Categoria";

export default function Bomboniere(){
    const header = {
        'title': "Peça bomboniere" , 
        'subtitle': 'Escolha entre os itens de bomboniere disponíveis:'
    }
    
    document.title = header.title

    const produtos = [
    {
        name: "Bala sortida",
        price: 0.20,
        image: bala
    },
    {
        name: "Bala de canela",
        price: 0.25,
        image: balacanela
    },
    {
        name: "Salgadinho Fofura",
        price: 4.0,
        image: fofura
    },
    {
        name: "M&M de pipoca",
        price: 5.5,
        image: mm
    },
    {
        name: "Paçoca (unidade)",
        price: 1.5,
        image: pacoca
    },
    {
        name: "Twix 40g",
        price: 4.5,
        image: twix
    }
    ]
  
    return (
        <>
            <Categoria 
                produtos={produtos} 
                {...header}
            ></Categoria>
        </>
    )
}