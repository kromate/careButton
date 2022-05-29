module.exports = {
//   plugins: ['@snowpack/plugin-typescript'],
   
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
};