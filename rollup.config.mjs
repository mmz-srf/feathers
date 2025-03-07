import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';
import eslint from '@rollup/plugin-eslint';
import minify from 'postcss-minify';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'build/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    svgr(),
    eslint(),
    image({
      include: ['**/*.png'],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [minify()],
    }),
    copy({
      targets: [
        {
          src: 'src/foundation/*.scss',
          dest: 'build/foundation',
          rename: (name, extension) => `${name}.${extension}`,
        },
        {
          src: 'src/assets/fonts/*.woff2',
          dest: 'build/assets/fonts',
          rename: (name, extension) => `${name}.${extension}`,
        },
      ],
    }),
  ],
};
