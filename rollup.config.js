import json from 'rollup-plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const banner = `/*!
  * rmmv-http v${version}
  * (c) ${new Date().getFullYear()} 阮中楠
  * @license MIT
  */`;

// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    banner,
  },
  plugins: [json(), resolve(), commonjs()],
};
