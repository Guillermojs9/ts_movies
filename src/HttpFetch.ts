import { MoviesResponse } from "./dataMovies";
import { Http } from "./Http";
const paginas = {
    now_playing: "/now_playing",
    popular: "/popular",
    top_rated: "/top_rated",

}

const route = paginas.now_playing;
export class HttpFetch extends Http {

    async getFilms(): Promise<MoviesResponse> {
        const respuesta = await fetch(`${this.url_base}${route}?api_key=${this.key}`);
        const data = await respuesta.json();
        return data;
    }

}