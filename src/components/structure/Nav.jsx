import logo from "@/assets/logo_fatec_br.png";

export default function Nav() {
  function vlibras() {
    const botao = document.querySelector('[vw-access-button]');
    if (botao) {
      botao.click()
    } else {
      console.warn('Botão VLibras não encontrado');
    }
  }

  return (
    <>
      <nav>
        <a href="/" aria-label="Ir para a página inicial">
          <img src={logo} alt="Logo empresa" /> 
        </a>
        <ul>
          <li className="dropdown">
            <a>
              <i className="bi bi-person-wheelchair" aria-hidden="true"></i>
              Acessibilidade
              <i className="bi bi-chevron-down" aria-hidden="true"></i>
            </a>
            
            <ul className="dropdown-menu">
              <li>
                <a>
                  <i className="bi bi-circle-half" aria-hidden="true"></i>
                  Preto e branco
                </a>
              </li>
              <hr />
              <li>
                <a>
                  <i className="bi bi-dash-square-fill" aria-hidden="true"></i>
                  Diminuir texto
                </a>
              </li>
              <hr />
              <li>
                <a>
                  <i className="bi bi-plus-square-fill" aria-hidden="true"></i>
                  Aumentar texto
                </a>
              </li>
              <hr />
              <li>
                <a>
                  <i className="bi bi-volume-up-fill" aria-hidden="true"></i>
                  Leitura por voz
                </a>
              </li>
              <hr />
              <li>
                <a onClick={vlibras}>
                  <i className="bi bi-universal-access" aria-hidden="true"></i>
                  Tradutor de libras
                </a>
              </li>
              <hr />
              <li>
                <a>
                  <i className="bi bi-brightness-high-fill" aria-hidden="true"></i>
                  Alto contraste
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/lanches">
              <i className="bi bi-fork-knife" aria-hidden="true"></i>
              Lanches
            </a>
          </li>
          <li>
            <a>
              <i className="bi bi-cake" aria-hidden="true"></i>
              Bomboniere
            </a>
          </li>
          <li>
            <a>
              <i className="bi bi-cup-straw" aria-hidden="true"></i>
              Bebidas
            </a>
          </li>
          <li>
            <a>
              <i className="bi bi-cart" aria-hidden="true"></i>
              Carrinho
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
