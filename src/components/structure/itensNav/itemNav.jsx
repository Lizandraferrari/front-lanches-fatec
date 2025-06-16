import { Link } from "react-router-dom";

export default function ItemNav(data){
  function vlibras() {
    const botao = document.querySelector("[vw-access-button]");
    if (botao) {
      botao.click()
    }
  }
  return (
    <>
      <li>
          <Link 
            to={data.route} 
            onClick={data.onClick}
          >
            <i className={data.className} aria-hidden="true"></i>
            {data.name}
          </Link>
      </li>
    </>
  )
}