module.exports = {
//   plugins: ['@snowpack/plugin-typescript'],
   
  devOptions: {
    tailwindConfig: './scripts/tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
};