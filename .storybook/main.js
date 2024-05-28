const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ['@storybook/addon-essentials', "@storybook/addon-styling-webpack", ({
    name: "@storybook/addon-styling-webpack",

    options: {
      rules: [{
    test: /\.css$/,
    sideEffects: true,
    use: [
        require.resolve("style-loader"),
        {
            loader: require.resolve("css-loader"),
            options: {
                
                
            },
        },
    ],
  },],
    }
  }), "@storybook/addon-webpack5-compiler-babel", "@chromatic-com/storybook"],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "resolve-url-loader",
        "sass-loader"
      ],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/u,
      use: ["@svgr/webpack"],
    });

    config.resolve.extensions.push(".svg");

    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
