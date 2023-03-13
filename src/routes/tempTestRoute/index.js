const route = async (fastify) => {
  // get route api/v1/test/
  fastify.get('/', async (request, reply) => {});

  // get route api/v1/test
  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { title } = request.body;

    const id = await fastify.db.one(
      'INSERT INTO test(title) VALUES($1) RETURNING id',
      [title]
    );

    reply.code(201).send(id);
  });
};

module.exports = route;