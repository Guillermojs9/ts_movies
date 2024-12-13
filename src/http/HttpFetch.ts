import { Result } from "../entities/dataMovies";
import { Http } from "./Http";
import { Movie } from "../entities/Movie";
import { movieMapper } from "../mapper/MovieMapper";

export class HttpFetch extends Http {

    async getFilms(route: string): Promise<Movie[]> {
        const data = await fetch(`${this.url_base}${route}?api_key=${this.key}`);
        const jsonData = await data.json();
        const dataMovies = jsonData.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }

}