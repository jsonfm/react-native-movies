import { View, SafeAreaView, Platform, Text, TouchableOpacity, ScrollView } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { TrendingMoviesCarousel } from "@/components/TrendingMoviesCarousel";
import { MoviesList } from "@/components/MoviesList";

const ios = Platform.OS == "ios";
const Home = () => {
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className="mt-8 px-4">
                <StatusBar animated={true} style="light" />
                <View className="flex-row items-center justify-between ">
                    <TouchableOpacity>
                        <Foundation name="align-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold">
                        <Text className="text-yellow-500 text-2xl">M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <Feather name="search" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
                <TrendingMoviesCarousel movies={[1, 2, 3]} />
            </ScrollView>
            <MoviesList />
        </View>
    );
};

export default Home;
