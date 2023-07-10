import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="movie" />
        </Stack>
    );
};

export default Layout;
