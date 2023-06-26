const tempService = require('../../service/temp.service');
const {
  postRequestbody,
  postResponse,
  getResponseBody,
} = require('./temp.schema');

const route = async (fastify) => {
  // get route api/v1/test/
  const { getAll, save } = tempService(fastify);
  fastify.get(
    '/',
    { schema: { response: getResponseBody } },
    async (request, reply) => {
      // const allTest = await fastify.db.query('SELECT * FROM test');
      const allTest = await getAll();
      // reply.code(200).send(allTest);
      reply.code(200).send({
        temps: allTest,
      });
    }
  );

  // post route api/v1/test
  fastify.post(
    '/',
    { schema: { body: postRequestbody, response: postResponse } },
    async (request, reply) => {
      fastify.log.info(`request with body ${request}`);
      const { title } = request.body;

      const id = await save(title);

      reply.code(201).send(id);
    }
  );
};

module.exports = route;
