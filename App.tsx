import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Movie } from './src/Movie';
import { fetchMovies } from './src/fetchMovies';
import { Styles } from './src/Styles';

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
      <ScrollView horizontal={true} style={Styles.type.container2}>
        {movies.map((item) => (
          <Image
            style={Styles.type.image}
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
