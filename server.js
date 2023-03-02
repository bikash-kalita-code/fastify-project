const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

const a = 10;

const start = async () => {
  try {
    await server.listen({
      port: PORT,
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
