import { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, View, Image } from "react-native"
import { Movie } from "../Movie";
import { fetchMovies } from "../fetchMovies";
import { Styles } from "../Styles";

const routes = {
  now_playing: "/now_playing",
  popular: "/popular",
  top_rated: "/top_rated",
};

function onPressFunction(movie: Movie) {
  console.log(`Id: ${movie.id}, Title: ${movie.title}`);
}

export function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function loadMovies() {
      const data = await fetchMovies(routes.now_playing, page);
      setMovies(data);
    })();
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

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
      <Button
        onPress={nextPage}
        title="Página siguiente"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
