function Detalles({ pelicula }) {
  if (!pelicula) {
    return (
      <div>
        <p>Por favor seleccione una película.</p>
      </div>
    )
  }

  return (
     <div className="detallesPelicula">
      <img className="detallesPelicula-poster" src={pelicula.Poster} alt={pelicula.Title} />

      <div className="detallesPelicula-info">
      <h2>{pelicula.Title}</h2>

      <p>Año: {pelicula.Year}</p>
      <p>Género: {pelicula.Genre}</p>
      <p>Director: {pelicula.Director}</p>
      <p>Actores: {pelicula.Actors}</p>
      <p>Sinopsis: {pelicula.Plot}</p>
      <p>Duración: {pelicula.Runtime}</p>
      <p>Idioma: {pelicula.Language}</p>
      <p>País: {pelicula.Country}</p>
      <p>Puntaje IMDb: {pelicula.imdbRating}</p>
      </div>
    </div>
  )
}

export default Detalles