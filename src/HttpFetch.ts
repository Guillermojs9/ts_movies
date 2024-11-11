import { MoviesResponse, Result } from "./dataMovies";
import { Http } from "./Http";
import { Movie } from "./Movie";
import { movieMapper } from "./MovieMapper";

export class HttpFetch extends Http {

    async getFilms(route: string): Promise<Movie[]> {
        const data = await fetch(`${this.url_base}${route}?api_key=${this.key}`);
        const jsonData = await data.json();
        const dataMovies = jsonData.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }

}