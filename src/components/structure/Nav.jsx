import logo from "@/assets/logo_fatec_br.png";
import { useState } from "react";
import ItemNav from "./itensNav/itemNav";
import Carrinho from "./itensNav/Carrinho";
import DropdownAcessibilidade from "./itensNav/dropdownAcessibilidade";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const itensNav = [
    {
      route: "/lanches",
      className: "bi bi-fork-knife",
      name: "Lanches",
    },
    {
      route: "/bomboniere",
      className: "bi bi-cake",
      name: "Bomboniere",
    },
    {
      route: "/bebidas",
      className: "bi bi-cup-straw",
      name: "Bebidas",
    },
  ]

  return (
    <>
      <nav>
        <a href="/" aria-label="Ir para a página inicial">
          <img src={logo} alt="Logo Fatec" />
        </a>
        <ul>
          <DropdownAcessibilidade />
          {itensNav.map((item, i) => (
            <ItemNav
              key={i}
              className={item.className}
              name={item.name}
              route={item.route}
            />
          ))}

          <li>
            <a onClick={() => setOpen(!open)}>
              <i className="bi bi-cart" aria-hidden="true"></i>
              Carrinho
            </a>
          </li>
          <Carrinho open={open} onClose={() => setOpen(false)} />
        </ul>
      </nav>
    </>
  )
}
