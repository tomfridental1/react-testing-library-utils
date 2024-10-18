// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import del from 'rollup-plugin-delete';
// import typescript from '@rollup/plugin-typescript';
// import svgr from '@svgr/rollup';
// import terser from '@rollup/plugin-terser';
// import image from '@rollup/plugin-image';
// import copy from 'rollup-plugin-copy'
import pkg from './package.json';

export default {
  input: 'index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      interop: 'compat',
    },
  ],
  // external: ['react', 'react-dom', 'styled-components'],
  // plugins: [
  //   del({ targets: 'library/*' }),
  //   image({ exclude: '/**/*.svg' }),
  //   svgr(),
  //   resolve({ browser: true }),
  //   commonjs(),
  //   typescript({ exclude: ['**/*.test.tsx'] }),
  //   terser({ compress: { evaluate: false, join_vars: false } }),
  //   copy({
  //     targets: [
  //       { src: 'components/composite/Table-v2/table-style.css', dest: 'library' },
  //     ]
  //   })
  // ],
};
