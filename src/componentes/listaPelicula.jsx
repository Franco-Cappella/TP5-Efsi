import MovieCard from "./tarjetaPelicula"

function ListaPelicula({ peliculas, onSeleccionar }) {
  return (
    <div  className="movie-grid">
      {peliculas.map((peli) => (
        <MovieCard
          key={peli.imdbID}
          pelicula={peli}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </div>
  )
}
export default ListaPelicula
