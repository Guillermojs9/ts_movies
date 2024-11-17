import { MoviesResponse, Result } from "./dataMovies";
import { Http } from "./Http";
import { Movie } from "./Movie";
import axios from "axios";
import { movieMapper } from "./MovieMapper";

export class HttpAxios extends Http {

    async getFilms(route: string): Promise<Movie[]> {
        //const response = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}`);
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        const response = await axios.get<MoviesResponse>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3&api_key=${this.key}`);
        const dataMovies = response.data.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
}