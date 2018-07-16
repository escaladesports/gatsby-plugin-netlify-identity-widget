# gatsby-plugin-netlify-identity-widget

A Gatsby plugin for including the [Netlify Identity widget](https://github.com/netlify/netlify-identity-widget) on your site.

## Install

With Yarn:

```bash
yarn add gatsby-plugin-netlify-identity-widget
```

Or with npm:

```bash
npm install --save gatsby-plugin-netlify-identity-widget
```

## Usage

```javascript
// In your gatsby-config.js
plugins: [
	'gatsby-plugin-netlify-identity-widget',
]
```

Or with options:

```javascript
// In your gatsby-config.js
plugins: [
	{
    resolve: 'gatsby-plugin-netlify-identity-widget',
    options: {
      container: '#netlify-modal'
    }
  }
]
```