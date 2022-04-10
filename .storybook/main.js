const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// const babelOptions = require('../babel.cong');

// const cssModulesScopedName = process.env.BABEL_ENV === 'development'
//   ? '[local]' 
//   : '[local]___[hash:base64:7]';

  // presets: [
  //   [
  //     require.resolve("@babel/preset-env"),
  //     { modules: false },
  //   ],
  //   require.resolve("@babel/preset-typescript"),
  //   require.resolve("@babel/preset-react"),
  // ],
  // plugins: [
  //   require.resolve("@babel/plugin-proposal-class-properties"),
  //   require.resolve('@babel/plugin-transform-typescript'),
  //   require.resolve("@babel/plugin-transform-modules-commonjs"),
  //   require.resolve("@babel/plugin-transform-runtime"),
  //   [
  //     require.resolve("babel-plugin-react-css-modules"),
  //     {
  //       "filetypes": {
  //         '.scss': {
  //           syntax: 'postcss-scss'
  //         },
  //         '.sass': {
  //           syntax: 'postcss-sass'
  //         }
  //       },
  //       generateScopedName: cssModulesScopedName,
  //       autoResolveMultipleImports: true
  //     }
  //   ]
  // ]

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [],
  webpackFinal: async (config) => {
  //   config.module.rules = [
  //     {
  //       test: /\.(ts|tsx)$/,
  //       use: [
  //         {
  //           loader: require.resolve('babel-loader'),
  //           options: babelOptions
  //         },
  //       ],
  //       exclude: /node_modules/,
  //     },
  //     {
  //       exclude: /node_modules/,
  //       test: /\.(js|jsx)$/,
  //       use: [
  //         {
  //           loader: require.resolve('babel-loader'),
  //           options: {
  //             presets: [
  //               require.resolve("@babel/preset-react"),
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.(s?)[ac]ss$/i,
  //       use: [
  //         require.resolve('style-loader'),
  //         {
  //           loader: require.resolve('css-loader'),
  //           options: {
  //             sourceMap: process.env.BABEL_ENV === 'development',
  //             modules: {
  //               localIdentName: cssModulesScopedName,
  //             },
  //           },
  //         },
  //         require.resolve('sass-loader'),
  //         {
  //           loader: require.resolve('postcss-loader'),
  //           options: {
  //             // Necessary for external CSS imports to work
  //             // https://github.com/facebookincubator/create-react-app/issues/2677
  //             postcssOptions: {
  //               plugins: () => [
  //                 require('postcss-flexbugs-fixes'),
  //                 require('autoprefixer')({
  //                   browsers: [
  //                     '>1%',
  //                     'last 4 versions',
  //                     'Firefox ESR',
  //                     'not ie < 9', // React doesn't support IE8 anyway
  //                   ],
  //                   flexbox: 'no-2009',
  //                 }),
  //               ],
  //             }
  //           },
  //         }
  //       ],
  //     },
  //     {
  //       test: /\.svg$/,
  //       use: [
  //         {
  //           loader: require.resolve('babel-loader'),
  //           options: {
  //             presets: [
  //               require.resolve("@babel/preset-react"),
  //             ],
  //           },
  //         },
  //         {
  //           loader: require.resolve('svg-sprite-loader'),
  //           options: {
  //             runtimeGenerator: require.resolve('../utils/svg-to-icon-component-runtime-generator'),
  //             runtimeOptions: {
  //               iconModule:`${path.join(__dirname, '..')}/utils/icon.js`
  //             }
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  //       loader: require.resolve('url-loader'),
  //       options: {
  //         limit: 10000,
  //         name: 'img/[name].[hash:8].[ext]',
  //       },
  //     }
  //   ];

  //   config.plugins.push(
  //     new SpriteLoaderPlugin(),
  //     new MiniCssExtractPlugin()
  //   ),


    await (() => {
      return new Promise ((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000)
      })
    })();

    config.resolve.modules.push(
      // path.join(__dirname, '../src'), 
      path.join(__dirname, '../dist'), 
      path.join(__dirname, '../assets')
    );

    config.resolve.extensions.push(
      '.tsx', 
      '.ts', 
      '.jsx',
      '.js',
      '.css', 
      '.sass',
      '.scss',
      '.svg', 
      '.json',
    );

    return config;
  }
};
