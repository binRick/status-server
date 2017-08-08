#!/usr/bin/env node
var dns = require('dn');

dns.dig(process.argv[2], process.argv[3], '10.177.155.120', function (err, data) {
	if(err)throw err;
	console.log(data);
});
