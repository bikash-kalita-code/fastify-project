const fp = require('fastify-plugin');
const swagger = require('fastify-swagger');

module.exports = fp((fastify, options, next) => {

    fastify.register(swagger, {
        
    });

    next();
});