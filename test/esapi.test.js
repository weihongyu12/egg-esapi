'use strict';

const mock = require('egg-mock');
const { assert } = require('egg-mock/bootstrap');

describe('test/esapi.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should have app.esapi', () => {
    assert(app.esapi);
    assert(app.esapi.encodeForHTML);
    assert(app.esapi.encodeForCSS);
    assert(app.esapi.encodeForJavaScript);
    assert(app.esapi.encodeForURL);
    assert(app.esapi.encodeForHTMLAttribute);
    assert(app.esapi.encodeForBase64);
  });

  it('encodeForHTML', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForHTML('< > " \' / &');
    assert(encoder, '&lt; &gt; &quot; &#x27; &#x2f; &amp;');
  });

  it('encodeForCSS', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForCSS(' % * + , - / ; < = > ^ and |');
    assert(encoder, ' &#x25; &#x2a; &#x2b; , - &#x2f; &#x3b; &lt; &#x3d; &gt; &#x5e; and &#x7c;');
  });

  it('encodeForJavaScript', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForJavaScript('[space] % * + , - / ; < = > ^ and |. Also, a </script>');
    assert(encoder, '\\x5Bspace\\x5D\\x20\\x25\\x20\\x2A\\x20\\x2B\\x20,\\x20\\x2D\\x20\\x2F\\x20\\x3B\\x20\\x3C\\x20\\x3D\\x20\\x3E\\x20\\x5E\\x20and\\x20\\x7C.\\x20Also,\\x20a\\x20\\x3C\\x2Fscript\\x3E');
  });

  it('encodeForURL', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForURL('[space] % * + , - / ; < = > ^ and |. Also, the </style>');
    assert(encoder, '%5Bspace%5D%20%25%20*%20+%20%2C%20-%20/%20%3B%20%3C%20%3D%20%3E%20%5E%20and%20%7C.%20Also%2C%20the%20%3C/style%3E');
  });

  it('encodeForHTMLAttribute', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForHTMLAttribute(' % * + , - / ; < = > ^ and |');
    assert(encoder, ' &#x25; &#x2a; &#x2b; , - &#x2f; &#x3b; &lt; &#x3d; &gt; &#x5e; and &#x7c;');
  });

  it('encodeForBase64', () => {
    const esapi = app.esapi;
    const encoder = esapi.encodeForBase64('[space] % * + , - / ; < = > ^ and |. Also, a </script>');
    assert(encoder, 'W3NwYWNlXSAlICogKyAsIC0gLyA7IDwgPSA+IF4gYW5kIHwuIEFsc28sIGEgPC9zY3JpcHQ+');
  });
});
