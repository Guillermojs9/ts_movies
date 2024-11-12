import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, Pressable } from 'react-native';
import { Movie } from './src/Movie';
import { fetchMovies } from './src/fetchMovies';
import { Styles } from './src/Styles';

const routes = {
  now_playing: "/now_playing",
  popular: "/popular",
  top_rated: "/top_rated",

}

function onPressFunction(movie: Movie) {
  console.log(`Id: ${movie.id}, Title: ${movie.title}`);
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
      <ScrollView horizontal={true} style={Styles.container2}>
        {movies.map((item) => (
          <Pressable
            key={item.id.toString()}
            onPress={() => onPressFunction(item)}>
            <Image
              style={Styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
