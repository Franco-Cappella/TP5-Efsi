/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "b153ef22"; // MI APIKEY (Tobi)
const BASE_URL = "http://www.omdbapi.com/"
    
export async function buscarPeliculas(titulo) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: APIKEY,
            s: titulo
        }
    })

    return respuesta.data
}

export async function buscarDetalle(id) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: APIKEY,
            i: id
        }
    })

    return respuesta.data
}
