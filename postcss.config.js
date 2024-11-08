import postcssComment from 'postcss-comment';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  parser: postcssComment,
};
