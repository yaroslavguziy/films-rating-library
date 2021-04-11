/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  alias: {
    '#layouts': './src/layouts',
    '#components': './src/components',
    '#translations': './src/translations',
    '#constants': './src/constants',
    '#utils': './src/utils',
    '#api': './src/api',
    '#hooks': './src/hooks',
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-react-refresh',
  ],
  buildOptions: {
    out: 'docs',
  },
};
