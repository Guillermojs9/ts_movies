import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Movie } from './src/Movie';
//import { HttpFetch } from './src/HttpFetch';
import { HttpAxios } from './src/HttpAxios';

const url_base = "https://api.themoviedb.org/3/movie";
const key = "c76ed6d50b96d2bfc0920abaeade0be3";
const routes = {
  now_playing: "/now_playing",
  popular: "/popular",
  top_rated: "/top_rated",

}
export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    //const httpFetch = new HttpFetch({ url_base: url_base, key: key });
    const httpAxios = new HttpAxios({ url_base: url_base, key: key });
    async function fetchData() {
      try {
        //const data = await httpFetch.getFilms(routes.now_playing);
        const data = await httpAxios.getFilms(routes.now_playing);
        setMovies(data);
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
        renderItem={({ item }) => <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster}`,
          }}
        />}
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
  image: {
    width: 100, // Ancho de la imagen
    height: 100, // Altura de la imagen
    marginTop: 20,
  },
});
