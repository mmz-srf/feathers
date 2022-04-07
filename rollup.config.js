import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import svgr from "@svgr/rollup";
import eslint from "@rollup/plugin-eslint";
import minify from "postcss-minify";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    svgr(),
    eslint(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [
        minify(),
      ]
    }),
    copy({
      targets: [
        {
          src: "src/foundation/variables.scss",
          dest: "build/scss/foundation",
          rename: "variables.scss",
        },
        {
          src: "src/foundation/typography.scss",
          dest: "build/scss/foundation",
          rename: "typography.scss",
        },
        {
          src: "src/foundation/breakpoints.scss",
          dest: "build/scss/foundation",
          rename: "breakpoints.scss",
        },
        {
          src: "src/foundation/colors.scss",
          dest: "build/scss/foundation",
          rename: "colors.scss",
        },
        {
          src: "src/foundation/mixins.scss",
          dest: "build/scss/foundation",
          rename: "mixins.scss",
        },
        {
          src: "src/foundation/fonts.scss",
          dest: "build/scss/foundation",
          rename: "fonts.scss",
        },
        {
          src: "src/foundation/globals.scss",
          dest: "build/scss/foundation",
          rename: "global.scss",
        },
      ],
    }),
  ],
};
