## Webpack Installation

open cmd format, $mkdir yourfoldername

$cd yourfoldername

$npm init -y

$git init

$npm i webpack webpack-cli webpack-dev-server --save

## Webpack dev server

[webpack-dev-server](https://survivejs.com/webpack/developing/webpack-dev-server/).

## Loaders

### `CSS`

$ npm install --save bootstrap

Loaders are the node-based utilities built for webpack to help webpack to compile and/or transform a given type of resource that can be bundled as a javascript module.

css-loader is the npm module that would help webpack to collect CSS from all the css files referenced in your application and put it into a string.

And then style-loader would take the output string generated by the above css-loader and put it inside the <style> tags in the index.html file.

So, lets start by first installing the two loaders.

### `Style Loader`
$ npm install css-loader style-loader --save-dev

add the below code in to webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  }
}

[css loader concept](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a).

## React

### `Setting Up React and Babel`

To work with React, we need to install it along with Babel. This will transpile the code from ES6 to ES5, as not all browsers support ES6 yet (for example Internet Explorer).

Install react and react-dom as a dependency

npm i react react-dom -S
-S: — save

Then install babel-core, babel-loader, babel-preset-env and babel-preset-react as a dev dependency:

npm i babel-core babel-loader babel-preset-env babel-preset-react -D

`babel-core:` Transforms your ES6 code into ES5

`babel-loader:` Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel

`babel-preset-env:` Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
(please note that babel-preset-es2015 is now deprecated)

`babel-preset-react:` Babel preset for all React plugins, for example turning JSX into functions

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

For configure Babel! Create a new file named .babelrc inside the project folder:
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

Add the following files to `webpack.config.js`

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

[react](https://www.valentinog.com/blog/react-webpack-babel/).

## Bundle Optimization
[refer](https://webpack.js.org/guides/code-splitting/).

### Code Splitting

Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

There are three general approaches to code splitting available:

Entry Points: Manually split code using entry configuration.

Prevent Duplication: Use the SplitChunksPlugin to dedupe and split chunks.

Dynamic Imports: Split code via inline function calls within modules.

###Entry Points

This is by far the easiest and most intuitive way to split code. However, it is more manual and has some pitfalls we will go over. Let's take a look at how we might split another module from the main bundle:

webpack-demo
|- package.json
|- webpack.config.js
|- /dist
|- /src
  |- index.js
+ |- another-module.js
|- /node_modules


### `Webpack.config.js`
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
+   another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};