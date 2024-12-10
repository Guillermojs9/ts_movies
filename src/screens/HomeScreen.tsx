import React from "react";
import { Button, View } from "react-native";
import { Movie } from "../Movie";
import { useMovies } from "../useMovies";
import { MovieList } from "../MovieList";

const routes = {
  now_playing: "/now_playing",
  popular: "/popular",
  top_rated: "/top_rated",
};

function onPressFunction(movie: Movie) {
  console.log(`Id: ${movie.id}, Title: ${movie.title}`);
}

export function HomeScreen() {
  const { movies, nextPage } = useMovies(routes.now_playing);

  return (
    <View>
      <MovieList movies={movies} onPress={onPressFunction} />
      <Button
        onPress={nextPage}
        title="Página siguiente"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

