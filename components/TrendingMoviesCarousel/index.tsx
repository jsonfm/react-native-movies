import { useNavigation } from "expo-router";
import { View, Text, ImageBackground, TouchableWithoutFeedback, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

interface MovieCardProps {
    movie: Movie;
}

const { width, height } = Dimensions?.get("window");

export const MovieCard = ({ movie }: MovieCardProps) => {
    const navigation = useNavigation();
    const handlePress = () => {};
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <ImageBackground
                source={{ uri: "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg" }}
                resizeMode="cover"
                style={{ width: width * 0.6, height: height * 0.4, borderRadius: 20 }}
            />
        </TouchableWithoutFeedback>
    );
};

interface TrendingMoviesCarouselProps {
    movies?: Movie[];
}

export const TrendingMoviesCarousel = ({ movies }: TrendingMoviesCarouselProps) => {
    const renderItem = ({ item, index }: { item: any; index: number }) => {
        return <MovieCard movie={item} key={`movie-${index}`} />;
    };

    return (
        <View>
            <Text className="text-white mt-2 mb-4 mx-4">Trending</Text>
            <Carousel
                data={movies || []}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width * 0.6}
                inactiveSlideOpacity={0.6}
                slideStyle={{
                    display: "flex",
                    alignItems: "center",
                }}
            />
        </View>
    );
};
