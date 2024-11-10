import { MoviesResponse } from "./dataMovies";
interface Config {
    url_base : string;
    key: string;
}

export abstract class Http {
    url_base: string;
    key: string;

    constructor({ url_base, key} : Config) {
        this.url_base = url_base;
        this.key = key;
    }

    abstract getFilms() : Promise<MoviesResponse>;
}