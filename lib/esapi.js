'use strict';

const ESAPI = require('node-esapi');

module.exports = app => {
  app.esapi = ESAPI.encoder();
};
