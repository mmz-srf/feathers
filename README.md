# SRF Feathers 🪶

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![NPM](https://badge.fury.io/js/srf-feathers.svg)](//npmjs.com/package/srf-feathers)


Shared Frontend Components for SRF applications

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) to help you create and show off your components

## Usage

Run `npm install srf-feathers --save` in your project root.

Import and use components in your code:

```js
import { Button } from "srf-feathers";

const MyComponent = () => (
  <div>
    <Button />
  </div>
);

```

### Importing Sass Modules

Example using Webpack:

```js
module.exports = {
  ...,
  resolve: {
    alias: {
      "@Feathers": path.resolve(__dirname, "node_modules/srf-feathers/build")
    },
    extensions: [".scss"],
    module: {
      rules: [
        {
          test: /\.(scss)$/i,
          use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
        }
      ]
    }
  }
}
```

Import Feathers Modules in your stylesheet:

```scss
@use "@Feathers/foundation/breakpoints";
@use "@Feathers/foundation/colors";
@use "@Feathers/foundation/fonts";
@use "@Feathers/foundation/globals";
@use "@Feathers/foundation/mixins";
@use "@Feathers/foundation/variables";
```

#### Fonts

Importing the font module requires to add the [resolve-url-loader](https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md) to your webpack config. It allows webpack to resolve the relative paths of fonts. Check the [webpack documentation](https://webpack.js.org/loaders/sass-loader/#problems-with-url) for more details on this issue.

In case this solution doesn't work for your usecase. It is possible to adjust the path of the fonts by overwriting the `$font-path` variable:

```scss
@use "@Feathers/fonts" with (
  $font-path: "/path/to/fonts/"
);
```

## Development

### Installation

* check out srf-feathers `git clone git@github.com:mmz-srf/feathers.git`
* enter directory where you installed it, e.g. `cd feathers`
* install dependencies `npm install`

ℹ️ If you have to update the _secrets_ (e.g. `CHROMATIC_PROJECT_TOKEN` for deployment to chromatic or `NPM_TOKEN` for deploying on NPM), you can change them on https://github.com/mmz-srf/feathers/settings/secrets/actions 

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

## Publishing

`srf-feathers` is published on [NPM](https://www.npmjs.com/package/srf-feathers). A github workflow is used to auto-publish on NPM when the version number in `package.json` is increased on the main branch.

In case this fails, publish via `npm publish` (you must be logged into npm in the CLI).

### Generating New Components

There is a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

⚠️ **Don't forget to add the component to your `index.ts` exports if you want the library to export the component!**

## Additional Help

### Install local version of feathers in your project

While developing, it is useful to not have to publish every little change to NPM before you can use it in your project.
For this, it's possible to "install" a local version of srf-feathers in your project with

```
npm i --save relative/path/to/feathers/repo
```

If, for example, your project's repository is in the same folder you checked out srf-feather, you can run the following command in your project's root folder:

```
npm i --save ../feathers
```

⚠️ If you've previously installed srf-feathers via NPM, you might have to remove the folder in your `node_modules`.

### Install feathers from GitHub branch

Alternatively to installing a local version of feathers you can also install it from a GitHub branch. This option is useful if you want to provide a deployable review application for testing:

```
npm i --save mmz-srf/feathers#my-branch

yarn add srf-feathers@https://github.com/mmz-srf/feathers.git#my-branch
```

### dev-tools (feathers-dev)

For a smoother experience, a collection of the most used commands has been added to a dev-script in `/bin/feathers-dev`. List the available commands with

```
./bin/feathers-dev help 
```

ℹ️ Pro tip: add `alias feathers-dev='path/to/feathers/bin/feathers-dev'` to your `~/.zshrc` or equivalent to be able to type `feathers-dev`!
