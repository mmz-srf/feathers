const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
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
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    config.resolve.extensions.push(".svg");

    return config;
  }
};
