# gatsby-plugin-seline

Easily add [Seline](https://seline.com/) to your Gatsby site.

## Install
`npm install --save gatsby-plugin-seline`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-seline`,
    options: {
      includeInDevelopment: false,
      delayTimeout: 0
    },
  },
]
```

## Configuration

- `includeInDevelopment` - Optional. Defaults to `false`
- `delayTimeout` - Optional. Number of milliseconds to wait before loading the script. Defaults to `0`

