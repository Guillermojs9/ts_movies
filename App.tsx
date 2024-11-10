import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Movie } from './src/Movie';
import { MoviesResponse, Result } from './src/dataMovies';
import axios from "axios";
import { HttpFetch } from './src/HttpFetch';

const url_base = "https://api.themoviedb.org/3/movie";
const key = "c76ed6d50b96d2bfc0920abaeade0be3";
const paginas = {
  now_playing: "/now_playing",
  popular: "/popular",
  top_rated: "/top_rated",

}

const route = paginas.now_playing;
export default function App() {
  /*
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    async function datos() {
      try {
        const respuesta = await fetch(`${url_base}${route}?api_key=${key}`);
        const data = await respuesta.json();
        const mappedMovies = data.results.map((item: Result) => movieMapper(item));
        setMovies(mappedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    datos();
  }, []);
*/
  /*
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
      async function datosAxios() {
        try {
          const response = await axios.get<MoviesResponse>(`${url_base}${route}?api_key=${key}`);
          const mappedMovies = response.data.results.map((item: Result) => movieMapper(item));
          setMovies(mappedMovies);
        } catch (error) {
          console.error("Error fetching movies with axios:", error);
        }
      }
      datosAxios();
    }, []);
    */
  const movieMapper = (item: Result): Movie => {
    return {
      id: item.id,
      title: item.title,
    };
  };
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const httpFetch = new HttpFetch({ url_base: url_base, key: key });

    async function fetchData() {
      try {
        const data = await httpFetch.getFilms();
        const mappedMovies = data.results.map((item: Result) => movieMapper(item));
        setMovies(mappedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text style={styles.movieTitle}>{item.title}</Text>}
        keyExtractor={(item) => "p" + item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333',
  },
});
