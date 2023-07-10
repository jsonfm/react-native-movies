import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { MovieListItem } from "../MovieListItem";

interface MoviesListProps {
    title: string;
    movies: Movie[];
}

export const MoviesList = ({ title, movies }: MoviesListProps) => {
    return (
        <View className="space-y-4 mt-8">
            <View className="flex-row justify-between items-center px-4">
                <Text className="text-white">{title}</Text>
                <TouchableOpacity className="">
                    <Text className="text-yellow-400">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    gap: 10,
                }}
            >
                {[1, 2, 3, 4, 5, 6]?.map((movie, index) => (
                    <MovieListItem key={`movie-list-item-${index}`} movie={movie} />
                ))}
            </ScrollView>
        </View>
    );
};
