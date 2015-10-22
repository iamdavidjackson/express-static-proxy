'use strict';

var httpProxy = require('http-proxy');
var path = require('path');
var url = require('url');
var _ = require('lodash');

var ExpressStaticProxy = function(options) {

	options = _.defaults(options, {
		target: '',
		changeOrigin: true,
		regex: 'jpeg|gif|png|jpg|js|css|ico|woff|svg|ttf|json|map'
	});

	var proxy = httpProxy.createProxyServer({
		target: url.format(options.target),
		changeOrigin: options.changeOrigin || true
	});

	proxy.on('error', function(err, req, res) {
		console.log(err);
	});

	var regExp = new RegExp('\.(' + options.regex + ')$', 'i');
	
	return function(req, res, next) {
		var ext = path.extname(req.url);

		if ( regExp.test(ext) ) {
			proxy.web(req, res);
		} else {
			next();
		}
	};
};

module.exports = ExpressStaticProxy;