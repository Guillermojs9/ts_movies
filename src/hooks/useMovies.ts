import { useState, useEffect } from "react";
import { fetchMovies } from "../conexion/fetchMovies";
import { Movie } from "../entities/Movie";


export function useMovies(route: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMovies = async () => {
            if (loading) return;
            setLoading(true);
            const data: Movie[] = await fetchMovies(route, page);
            setMovies((prevMovies) => [...prevMovies, ...data]);
            setLoading(false);
        };

        loadMovies();
    }, [page]);

    const nextPage = () => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return { movies, nextPage, loading };
}


