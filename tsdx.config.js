const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss({
            purge: ['./src/**/*.tsx'],
            darkMode: 'media', // or 'media' or 'class'
            theme: {
              extend: {},
            },
            variants: {
              extend: {},
            },
            plugins: [],
          }),
          autoprefixer(),
        ],
        inject: true,
        extract: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};