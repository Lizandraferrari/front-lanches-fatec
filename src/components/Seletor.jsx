export default function Seletor(data) {
  var options = data.options //tem q mandar em lista as coisas q forem ser os valores do seletor

  return (
    <div className="flex-linha">
        <label htmlFor="opcoes-selecao">{data.label}
          <select id="opcoes-selecao" onChange={data.onChange}>
              <option value="" disabled selected>
                {data.default}
                </option>
              {options.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
              ))}
          </select>
        </label>
    </div>

  )
}