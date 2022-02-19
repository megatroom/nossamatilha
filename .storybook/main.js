const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const toPath = (filePath) => path.join(process.cwd(), filePath)

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
        plugins: [
          ...(config.resolve.plugins || []),
          new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
          }),
        ],
      },
    }
  },
  staticDirs: ['../public'],
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/templates/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
}
