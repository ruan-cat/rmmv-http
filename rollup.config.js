import json from 'rollup-plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// rollup.config.js
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
      globals: {
        // http: 'require$$1',
        // https: 'require$$2',
        // stream: 'require$$0$1',
        // assert: 'require$$4',
        // zlib: 'require$$8',
        // util: 'require$$1$1',
        // url: 'require$$0$1',
        // path: 'require$$1$2',
        // fs: 'require$$6',
      },
      intro: '/* this is a library */',
    },
  ],

  plugins: [
    json(),
    resolve({
      jsnext: true, // 该属性是指定将Node包转换为ES2015模块
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      main: true, // Default: true
      browser: true, // Default: false
    }),
    commonjs(),
    nodePolyfills({
      // include: ['http'],
      include: null,
    }),
  ],
};
