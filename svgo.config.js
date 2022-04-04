module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // customize default plugin options
          prefixIds: false,
          inlineStyles: false,
          mergeStyles: false,
          minifyStyles: false,
        },
      },
    },
  ],
};
