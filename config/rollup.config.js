process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

import path from 'path';

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';
import multiInput from "rollup-plugin-multi-input";
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg-import';

import grabComponentsDirecrories from '../utils/grab-comp-dirs';

const inputDirs = grabComponentsDirecrories();

console.log(inputDirs);

export default {
  moduleName: 'OurComponents',
  input: inputDirs,
  output: [
    {
      dir: path.join(__dirname, '../dist'),
      format: 'es',
      chunkFileNames: 'chunks/[name]-[hash].js',
    },
  ],
  plugins: [
    svg({
      stringify: false
    }),
    multiInput({
      relative: 'src/',
    }),
    commonjs(),
    postcss({
      modules: true
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: [
        '.tsx', 
        '.ts', 
        '.jsx',
        '.js',
        '.css', 
        '.sass',
        '.scss',
        '.svg', 
        '.json',
      ],
      exclude: 'node_modules/**',
    }),
    peerDepsExternal(),
    resolve(),
  ],
};

