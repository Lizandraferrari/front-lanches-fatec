import Categoria from "@/components/Categoria";
import risolesQueijoImg from "@/assets/risoles-queijo.png";
import kibeFritoImg from "@/assets/kibe-frito.png";
import coxinhaFritaImg from "@/assets/coxinha-frita.png";
import bolovoFritoImg from "@/assets/bolovo-frito.png";

export default function Lanches(){
    const header = {
        'title': "Peça lanches" , 
        'subtitle': 'Escolha entre os lanches disponíveis:'
    }
      const produtos = [
    {
      name: "Risoles de queijo",
      price: 6.0,
      image: risolesQueijoImg,
    },
    {
      name: "Kibe frito",
      price: 6.0,
      image: kibeFritoImg,
    },
    {
      name: "Coxinha frita",
      price: 6.0,
      image: coxinhaFritaImg,
    },
    {
      name: "Bolovo frito",
      price: 6.0,
      image: bolovoFritoImg,
    },
  ]
  document.title = header.title
    return (
        <>
            <Categoria 
                produtos={produtos} 
                {...header}
            ></Categoria>
        </>
    )
}