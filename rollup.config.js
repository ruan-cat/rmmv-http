/** 目前有很多配置是模仿vue-router来配置的 并没有很严格的跟着其他的教程来做
 *
 * 目前绝大多数的依赖包均参考别人的教程 但是实际安装的时候还是参考至github官方提供的插件文档
 */

import { version } from './package.json';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';
import flow from 'rollup-plugin-flow-no-whitespace';

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
      file: './dist/rmmv-http.js',
      format: 'umd',
      name: 'RmmvHttp',
      exports: 'named',
      intro: '/* this is a library */',
      compact: true,
      extend: true,
      banner,

      globals: {
        PluginManager: 'PluginManager',
      },
    },
  ],

  plugins: [
    // import resolve from 'rollup-plugin-node-resolve';
    // https://www.cnblogs.com/tugenhua0707/p/8179686.html
    // resolve({
    //   jsnext: true, // 该属性是指定将Node包转换为ES2015模块
    //   // main 和 browser 属性将使插件决定将那些文件应用到bundle中
    //   main: true, // Default: true
    //   browser: true, // Default: false
    // }),

    nodeResolve({ browser: true }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    json(),
    flow(),
  ],
};
