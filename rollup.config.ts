import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
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
  plugins: [
    commonjs(),
    typescript(),
  ],
  external: ['@testing-library/dom'],
};
