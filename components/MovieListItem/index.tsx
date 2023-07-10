import { View, Text, TouchableWithoutFeedback, ImageBackground, Dimensions } from "react-native";
import React from "react";

interface MovieListItemProps {
    movie?: Movie;
}
const { width, height } = Dimensions?.get("window");
export const MovieListItem = ({ movie }: MovieListItemProps) => {
    const movieTitle = "Lorem ipsum dolor sit amet.";
    const title = movieTitle.length > 14 ? movieTitle?.slice(0, 14) + " ..." : movieTitle;
    return (
        <TouchableWithoutFeedback>
            <View className="space-y-1 mr-4">
                <ImageBackground
                    source={{
                        uri: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
                    }}
                    className="rounded-xl overflow-hidden"
                    style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300">{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};
