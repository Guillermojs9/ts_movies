import React from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useMovies } from "../hooks/useMovies";
import { MovieListItem } from "../components/MovieListItem";
import { Styles } from "../styles/Styles";

const routes = {
  now_playing: "/now_playing",
  popular: "/popular",
  upcoming: "/upcoming",
};

export function SettingsScreen() {
  const { movies, nextPage, loading } = useMovies(routes.upcoming);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#841584" />;
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={nextPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}



