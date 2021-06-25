import { withHTML } from '@whitespace/storybook-addon-html/react';
import { withCssResources } from '@storybook/addon-cssresources';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  layout:'centered',
  cssresources: [
    {
      id: `Bring`,
      code: `<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@posten/hedwig@11/dist/bring.css"></link>`,
      picked: false,
    },
  ],
}

export const decorators = [
  withHTML,
  withCssResources
];
