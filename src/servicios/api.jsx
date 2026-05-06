/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "8340286a"; // MI APIKEY (TOTOSO)
const BASE_URL = "http://www.omdbapi.com/?apikey=" + APIKEY
    
export async function buscarPeliculas(titulo) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            s: titulo
        }
    })

    return respuesta.data
}

export async function buscarDetalle(id) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            i: id
        }
    })

    return respuesta.data
}
