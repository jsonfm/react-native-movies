module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            require.resolve("expo-router/babel"),
            require.resolve("nativewind/babel"),
            [
                "module-resolver",
                {
                    root: ["."],
                    extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                    alias: {
                        "@/components": "./components",
                        "@/app": "./app",
                    },
                },
            ],
        ],
    };
};
