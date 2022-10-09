const webpack = require("webpack");

module.exports = {
  "stories": [
    "../src/**/*.stories.js"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-storysource"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
  // webpackFinal: config => {
  //   config.module.rules.push({
  //     test: /.scss$/i,
  //     use: [
  //       "style-loader",
  //       "css-loader",
  //       "sass-loader"
  //     ]
  //   })
  //   return config;
  // }
}