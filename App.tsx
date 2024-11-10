import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Movie } from './src/Movie';
import { Result } from './src/dataMovies';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function datos() {
      try {
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c76ed6d50b96d2bfc0920abaeade0be3");
        const data = await respuesta.json();
        const mappedMovies = data.results.map((item: Result) => movieMapper(item));
        setMovies(mappedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    datos();
  }, []);

  const movieMapper = (item: Result): Movie => {
    return {
      id: item.id,
      title: item.title,
    };
  };

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
