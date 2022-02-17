
function Fila({ data }) {
  data.map((item, key) => {
    console.log(item)
  })
  return (
    <tbody>
      {
        data.map((item, key) => (
          <tr>
            <th scope="row">{key}</th>
            <td>{item.Nombre}</td>
            <td>{item.Peso}</td>
            <td>{item.Edad}</td>
            <td>{item.Raza}</td>
          </tr>
        ))
      }
    </tbody>
  )
}
export default Fila
