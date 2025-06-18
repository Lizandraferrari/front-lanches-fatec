import bala from "@/assets/Bebidas/refrigerantes.webp";
import balacanela from "@/assets/Bebidas/suco-laranja.webp";
import fofura from "@/assets/Bebidas/Agua.webp";
import Categoria from "@/components/Categoria";

export default function Bebidas(){
    const header = {
        'title': "Peça Bebidas" , 
        'subtitle': 'Escolha entre as bebidas disponíveis:'
    }
    
    document.title = header.title

    const produtos = [
    {
        name: "Refrigerante",
        price: 5.0,
        image: bala
    },
    {
        name: "Suco",
        price: 5.0,
        image: balacanela
    },
    {
        name: "Água",
        price: 3.0,
        image: fofura
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