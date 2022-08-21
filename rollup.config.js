import { version } from './package.json';
import json from 'rollup-plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const banner = `/*!
  * rmmv-http v${version}
  * (c) ${new Date().getFullYear()} 阮中楠
  * @license MIT
  */`;

export default {
  input: 'src/main.js',
  // dir: './dist',
  // dir: path.resolve(__dirname, 'dist/esm'),
  output: [
    {
      file: './dist/res.umd.js',
      format: 'umd',
      name: 'MyBundle',
      exports: 'named',
      intro: '/* this is a library */',
      compact: true,
      extend: true,
      banner,
    },
  ],

  plugins: [
    json(),

    // import resolve from 'rollup-plugin-node-resolve';
    // https://www.cnblogs.com/tugenhua0707/p/8179686.html
    // resolve({
    //   jsnext: true, // 该属性是指定将Node包转换为ES2015模块
    //   // main 和 browser 属性将使插件决定将那些文件应用到bundle中
    //   main: true, // Default: true
    //   browser: true, // Default: false
    // }),

    nodeResolve({ browser: true }),

    commonjs(),
  ],
};
