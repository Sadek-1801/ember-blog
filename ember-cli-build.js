'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// import { setConfig } from '@warp-drive/build-config';

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    cssModules: {
      intermediateOutputPath: 'app/styles/_modules.scss',
    },
    sassOptions: {
      extension: 'scss',
    },
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: ['node_modules'],
            },
          },
        ],
      },
    },
  });

  return app.toTree();
};
