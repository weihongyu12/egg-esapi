# egg-esapi

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-esapi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-esapi
[travis-image]: https://img.shields.io/travis/weihongyu12/egg-esapi.svg?style=flat-square
[travis-url]: https://travis-ci.org/weihongyu12/egg-esapi
[codecov-image]: https://img.shields.io/codecov/c/github/weihongyu12/egg-esapi.svg?style=flat-square
[codecov-url]: https://codecov.io/github/weihongyu12/egg-esapi?branch=master
[david-image]: https://img.shields.io/david/weihongyu12/egg-esapi.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-esapi
[snyk-image]: https://snyk.io/test/npm/egg-esapi/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-esapi
[download-image]: https://img.shields.io/npm/dm/egg-esapi.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-esapi

An ESAPI(Enterprise Security API) plugin for [egg.js](https://eggjs.org/)

## Install

```bash
$ npm i egg-esapi --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.esapi = {
  enable: true,
  package: 'egg-esapi',
};
```

## Example

```javascript
this.app.esapi.encodeForHTML(HTML);
this.app.esapi.encodeForCSS(CSS);
this.app.esapi.encodeForJavaScript(JavaScript);
this.app.esapi.encodeForURL(URL);
this.app.esapi.encodeForHTMLAttribute(HTMLAttribute);
this.app.esapi.encodeForBase64(Base64);

// or use in context
this.ctx.esapi.encodeForHTML(HTML);
this.ctx.esapi.encodeForCSS(CSS);
this.ctx.esapi.encodeForJavaScript(JavaScript);
this.ctx.esapi.encodeForURL(URL);
this.ctx.esapi.encodeForHTMLAttribute(HTMLAttribute);
this.ctx.esapi.encodeForBase64(Base64);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/weihongyu12/egg-esapi/issues).

## License

[MIT](LICENSE)
