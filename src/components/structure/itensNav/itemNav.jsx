import { Link } from "react-router-dom";

export default function ItemNav(data) {
  return (
    <li id={data.id}>
      {data.route ? (
        <Link to={data.route} onClick={data.onClick}>
          <i className={data.className} aria-hidden="true"></i>
          {data.name}
        </Link>
      ) : (
        <button style={{backgroundColor: 'transparent'}} onClick={data.onClick}>
          <i className={data.className} aria-hidden="true">{data.name}</i>
        </button>
      )}
    </li>
  )
}
