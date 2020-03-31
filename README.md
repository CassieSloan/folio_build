# Gatsby SASS

Gatsby Starter.

## Features

- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
- SEO
  - Sitemap
  - Canonical Tags
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
  - Google Tag Manager
  - Robots.txt generator
- Offline Support
- Brotli Compression
- WebApp Manifest Support
- Configurable
  - Use the `website.js` to easily change the most important information
  - Use `.env.template` to generate `.env.development` and `.env.production` files containing ENV variables

## Instructions

### Create .env files

Use `.env.template` to generate `.env.development` and `.env.production` files containing the following ENV variables

#### SITE_URL

This is the frontend URL of your project, for development it will be http://localhost:8000 or similar


#### IS_STAGING

Specifies whether the site is in staging, setting this variable will ensure the site is not crawlable by search engines. Remove this variable if you are deploying to the production URL and you want the site indexed.

### Netlify

If you deploy to Netlify you will need to use their UI to create the above build variables. See instructions [here](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)

## Development

Run the local server:

```shell
npm run dev
```

### Building your site

```shell
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby SASS', // Default Site Title used for PWA
  description: 'A unopinionated Gatsby Starter.',
  siteName: 'Lean Gatsby SASS starter', // Sitename for Facebook
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/logos/logo-1024.png', // Default OpenGraph image
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Woolly', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Company Name', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  googleAnalyticsID: '',
}

## Typography

This boilerplate is using [NPM Typefaces](https://github.com/KyleAMathews/typefaces) that serves Google (and other) fonts locally to boost performance and allow them to load offline. Out the box it is using [Lato](https://www.npmjs.com/package/typeface-lato) and [Titillium](https://www.npmjs.com/package/typeface-titillium-web) these are imported and can be replaced in `src/components/Layout.jsx`.
