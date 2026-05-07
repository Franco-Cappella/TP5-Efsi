function Busqueda({ busqueda, setBusqueda }) {
  return (
    <input className="search-input"
      type="text"
      placeholder="Escribí una película "
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  )
}

export default Busqueda
