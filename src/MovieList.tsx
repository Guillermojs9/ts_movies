import React from "react";
import { Pressable, Image, ScrollView, View } from "react-native";
import { Styles } from "./Styles";
import { Movie } from "./Movie";

interface MovieListProps {
    movies: Movie[];
    onPress: (movie: Movie) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ movies, onPress }) => {
    return (
        <ScrollView horizontal={true} style={Styles.container2}>
            {movies.map((item) => (
                <Pressable key={item.id.toString()} onPress={() => onPress(item)}>
                    <Image
                        style={Styles.image}
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${item.poster}`,
                        }}
                    />
                </Pressable>
            ))}
        </ScrollView>
    );
};
