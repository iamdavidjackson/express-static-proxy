# express-static-proxy

Simple implementation using [node-http-proxy](https://github.com/nodejitsu/node-http-proxy) and a configurable regex to match file extensions in a request and forward ones that match to another location.

## Installation

`npm install --save express-static-proxy`

## Usage

Initialize like any other piece of middleware in Express.  Pass in an options object with a target, and regex of the filetypes to proxy.

* `target`: string/object - uses the format function from [url](https://www.npmjs.com/package/url) so you can pas in a string or an object
* `regex`: string - (jpeg|gif|png|jpg|js|css|ico|woff|svg|ttf|json|map) regular expression like string for the file types to proxy 
* Any other settings added will be passed into [http-proxy options](https://github.com/nodejitsu/node-http-proxy#options)
 
## Example

```
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

app.use(require('express-static-proxy')(staticProxySettings));
```

