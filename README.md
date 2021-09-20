# hedwig-react

> Hedwig react components

[![NPM](https://img.shields.io/npm/v/hedwig-react.svg)](https://www.npmjs.com/package/hedwig-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @posten/hedwig-react
```

## Icons
We are using icons from Font Awesome Pro wich requires you to obtain a licence. The auth token from your licence will need to be added to an environment variable. For Posten and Bring developers, please contact the Hedwig contributors for this token. For other users, a licence can be obtained <a href="https://fontawesome.com">here</a>

```bash
export NPM_TOKEN=[your auth token]
```

## Styling
Our components are functional components only, so you will still have to import fonts and styling 
```bash
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/assets/fonts.css">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/dist/{posten/bring}.css">
```

## Usage

```jsx
import { Badge } from '@posten/hedwig-react'

<Badge>Hello world</Badge>
```

## License

MIT © [Bring](https://github.com/Bring)
