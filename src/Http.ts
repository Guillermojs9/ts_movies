import { Movie } from "./Movie";
interface Config {
    url_base: string;
    key: string;
    page: number;
}

export abstract class Http {
    url_base: string;
    key: string;
    page: number;

    constructor({ url_base, key, page }: Config) {
        this.url_base = url_base;
        this.key = key;
        this.page = page;
    }

    abstract getFilms(route: string): Promise<Movie[]>;
}