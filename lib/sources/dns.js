var http = require('http'),
    dns = require('dn'),
    _ = require('underscore');

exports.check = function(serviceDefinition, service, callback) {
    dns.dig(serviceDefinition.domain, serviceDefinition.record, serviceDefinition.server, function(err, data) {
        if (err)
            return callback('DNS Failure', service);
        if (data.answer.length > 0) {
var Answer = data.answer.filter(function(a){
	return a.address || false;
});
            service.status = "up";
            service.statusCode = "OK";
            service.message = Answer[0].address;
        }else{
            service.status = "down";
}
        return callback(service.status, service);
    });
};
