import { MoviesResponse, Result } from "../entities/dataMovies";
import { Http } from "./Http";
import { Movie } from "../entities/Movie";
import axios from "axios";
import { movieMapper } from "../mapper/MovieMapper";

export class HttpAxios extends Http {

    async getFilms(route: string): Promise<Movie[]> {
        const response = await axios.get<MoviesResponse>(`${this.url_base}${route}?language=en-US&page=${this.page}&api_key=${this.key}`);
        const dataMovies = response.data.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
}