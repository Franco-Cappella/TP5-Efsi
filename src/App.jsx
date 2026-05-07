import { useEffect, useState } from "react"
import Titulo from "./componentes/titulo"
import Busqueda from "./componentes/busqueda"
import ListaPelicula from "./componentes/listaPelicula"
import Detalles from "./componentes/detalles"
import Loader from "./componentes/loader"
import MensajeDeError from "./componentes/mensajeDeError"
import { buscarPeliculas, buscarDetalle } from "./servicios/api"
import "./App.css"

function App() {

  const [busqueda, setBusqueda] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [idSeleccionado, setIdSeleccionado] = useState("")
  const [detallePelicula, setDetallePelicula] = useState(null)


  useEffect(() => {
    if (!terminoBusqueda.trim()) return

    const traerPeliculas = async () => {
      setLoading(true)
      setError("")
      setDetallePelicula(null)

      const data = await buscarPeliculas(terminoBusqueda)

      if (data.Response === "False" || !data.Search || data.Search.length === 0) {
        setPeliculas([])
        setError("No se encontraron resultados.")
      } else {
        setPeliculas(data.Search)
      }

      setLoading(false)
    }

    traerPeliculas()
  }, [terminoBusqueda])


  useEffect(() => {
    if (!idSeleccionado) return

    const traerDetalle = async () => {
      const data = await buscarDetalle(idSeleccionado)
      setDetallePelicula(data)
    }

    traerDetalle()
  }, [idSeleccionado])


  const manejarSubmit = (e) => {
    e.preventDefault()

    if (!busqueda.trim()) {
      setPeliculas([])
      setError("Ingresá un título para buscar.")
      return
    }

    setTerminoBusqueda(busqueda)
  }


  const manejarSeleccion = (id) => {
    setIdSeleccionado(id)
  }


  return (
    <div className="app-container">

      <Titulo texto="Buscador de películas y series" />

      <form className="search-form" onSubmit={manejarSubmit}>
        <Busqueda
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <button className="search-button" type="submit">
          Buscar
        </button>
      </form>

      {loading && <Loader />}

      {!loading && error && (
        <MensajeDeError mensaje={error} />
      )}

      {!loading && !error && peliculas.length > 0 && (
        <ListaPelicula
          peliculas={peliculas}
          onSeleccionar={manejarSeleccion}
        />
      )}

      {detallePelicula && (
        <Detalles pelicula={detallePelicula} />
      )}

    </div>
  )
}

export default App