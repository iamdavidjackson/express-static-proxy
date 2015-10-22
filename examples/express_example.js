'use strict';

var express = require('express');

var staticProxySettings = {
	target: {
      'protocol' : 'https',
      'hostname' : 'github.com',
      'path': 'iamdavidjackson/express-static-proxy/examples/proxied/'
    },
    changeOrigin: true,
    prependPath: true,
    regex: 'jpeg|gif|png|jpg|js|css|ico|woff|svg|ttf|json|map'
};

var app = express();

app.use(require('../index')(staticProxySettings));

app.use(express.static('public'));

app.use('/', function(req, res, next) {
	res.send('works');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
