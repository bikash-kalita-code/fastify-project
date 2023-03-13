// NOTE: Here, we will create the application not the server
const fastify = require('fastify');
const db = require('./plugin/database');

const build = (opts = {}) => {
  const app = fastify(opts);

  // register plugins
  app.register(db);

  // For now, we don't need async below
  app.get('/', (request, reply) => {
    reply.code(200).send({ hello: 'world!' });
  });

  return app;
};

module.exports = build;

// In above code, we are exporting the app instead of running it now
// because it will be beneficial for running test cases.
// Creating a fastify application and running the server are completely different things
// So, inside server.js we are going to write the logic only related to servers and
// not realated to fastify
