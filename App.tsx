import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
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
    <View>
      <ScrollView horizontal={true} style={styles.container2}>
        {movies.map((item) => (
          <Image
            style={styles.image}
            key={item.id.toString()}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}
      </ScrollView>

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
  container2: {
    height: 400,
  },
  image: {
    width: 270,
    marginTop: 20,
    margin: 3,
  },
});
