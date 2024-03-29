module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-cssresources',
    '@storybook/addon-a11y'
  ]
}
