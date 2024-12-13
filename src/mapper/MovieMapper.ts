import { Result } from "../entities/dataMovies";
import { Movie } from "../entities/Movie";

export const movieMapper = (item: Result): Movie => {
    return {
        id: item.id,
        title: item.title,
        poster: item.poster_path,
    };
};

