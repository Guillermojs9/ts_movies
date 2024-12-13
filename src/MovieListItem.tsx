import React from "react";
import { Pressable, Image, StyleSheet} from "react-native";
import { Movie } from "./Movie";

interface MovieListItemProps {
    movie: Movie;
}

function onPressFunction(movie: Movie) {
    console.log(`ID: ${movie.id}, Title: ${movie.title}`)
}

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => (
    <Pressable style={styles.item} onPress={() => onPressFunction(movie)}>
        <Image
            style={styles.image}
            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster}` }}
        />
    </Pressable>
);

const styles = StyleSheet.create({
    item: {
        width: 120,
        marginHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 8,
    },
    title: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 12,
    },
});

