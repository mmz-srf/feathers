import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';
import eslint from '@rollup/plugin-eslint';
import minify from 'postcss-minify';
import packageJson from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
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
        {
          src: 'src/assets/images/*',
          dest: 'build/assets/images',
          rename: (name, extension) => `${name}.${extension}`,
        },
      ],
    }),
  ],
};
