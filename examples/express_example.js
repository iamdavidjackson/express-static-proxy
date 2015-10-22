'use strict';

var staticProxySettings = {
	target: {
      'protocol' : 'https',
      'hostname' : 'raw.githubusercontent.com',
      'pathname': '/iamdavidjackson/express-static-proxy/master/examples/proxied'
    },
    changeOrigin: true,
    prependPath: true,
    regex: 'jpeg|gif|png|jpg|js|css|ico|woff|svg|ttf|json|map'
};

var express = require('express');
var app = express();

// serve up images, css, js, etc from github
app.use(require('../index')(staticProxySettings));

// serve up html files from public directory
app.use(express.static('public'));

// start server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
