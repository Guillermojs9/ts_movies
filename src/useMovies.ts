import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { fetchMovies } from "./fetchMovies";

export function useMovies(route: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchMovies(route, page);
            setMovies(data);
        };

        loadMovies();
    }, [page]);

    const nextPage = () => {
        setPage((prev) => prev + 1);
    };

    return { movies, nextPage };
}
