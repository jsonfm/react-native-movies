import { View, Text } from "react-native";
import React from "react";

interface MoviesListProps {
    movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
    return (
        <View>
            <Text>MoviesList</Text>
        </View>
    );
};
