import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { Movie } from './src/Movie';
import { fetchMovies } from './src/fetchMovies';

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
    (async function loadMovies() {
      const data = await fetchMovies(routes.now_playing);
      setMovies(data);
    })();
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
