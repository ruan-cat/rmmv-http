import json from 'rollup-plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',

  // dir: './dist',
  // dir: path.resolve(__dirname, 'dist/esm'),
  output: [
    // {
    //   file: './dist/res.cjs.js',
    //   format: 'cjs',
    // },

    // {
    //   file: './dist/res.iife.js',
    //   format: 'iife',
    //   name: 'MyBundle',
    //   compact: true,
    //   intro: '/* this is a library */',
    // },

    {
      file: './dist/res.umd.js',
      format: 'umd',
      name: 'MyBundle',
      compact: true,
      extend: true,
      exports: 'named',
      intro: '/* this is a library */',
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
