import { HttpAxios } from "../http/HttpAxios";
import { Movie } from "../entities/Movie";

const url_base = "https://api.themoviedb.org/3/movie";
const key = "c76ed6d50b96d2bfc0920abaeade0be3";

export async function fetchMovies(route: string, page: number): Promise<Movie[]> {
  const httpAxios = new HttpAxios({ url_base: url_base, key: key, page: page });
  try {
    const data = await httpAxios.getFilms(route);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

