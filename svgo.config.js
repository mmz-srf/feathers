module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // customize default plugin options
          inlineStyles: false,
          mergeStyles: false,
          minifyStyles: false,
          removeTitle: false,
          removeViewBox: false,
        },
      },
    },
    {
      name: "prefixIds",
      params: {
        prefixIds: false
      }
    }
  ],
};
