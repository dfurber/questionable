const path = require('path')

const webpackConfig = (config) => {
  config.module.rules = config.module.rules.filter(
    (rule) => rule.test.toString() !== '/\\.css$/'
  )
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.(sa|sc|c)ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.module\.(sa|sc|c)ss$/i,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/uswdsResources.scss'],
        },
      },
    ],
  })

  return config
}

const main = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
       name: '@storybook/addon-docs',
       options: { configureJSX: true }
    },
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    '@storybook/addon-controls',
    'storybook-readme',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    // https://github.com/styleguidist/react-docgen-typescript/issues/356
    // reactDocgen: 'react-docgen-typescript',
    reactDocgen: 'none',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../tsconfig.lint.json'),
    },
  }
}

module.exports = main;
