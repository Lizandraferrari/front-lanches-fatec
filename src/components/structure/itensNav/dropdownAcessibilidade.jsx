import ItemNav from "./itemNav";

export default function DropdownAcessibilidade() {
  const itensAcessibilidade = [
  {
    className: "bi bi-circle-half",
    name: "Preto e branco"
  },
  {
    className: "bi bi-dash-square-fill",
    name: "Diminuir texto"
  },
  {
    className: "bi bi-plus-square-fill",
    name: "Aumentar texto"
  },
  {
    className: "bi bi-volume-up-fill",
    name: "Leitura por voz"
  },
  {
    className: "bi bi-universal-access",
    name: "Tradutor de libras",
    onClick: "vlibras"
  },
  {
    className: "bi bi-brightness-high-fill",
    name: "Alto contraste"
  }
]
  return (
    <li className="dropdown">
      <a>
        <i className="bi bi-person-wheelchair" aria-hidden="true"></i>
        Acessibilidade
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </a>

      <ul className="dropdown-menu">
        {
          itensAcessibilidade.map((item , i) => (
            <>
              <ItemNav
                key = {i} 
                name = {item.name}
                className = {item.className}
                onClick = {item.onClick}
              ></ItemNav>
            </>
          ))
        }
      </ul>
    </li>
  )
}
