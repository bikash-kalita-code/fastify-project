const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

const start = async () => {
  try {
    await server.listen({
      port: PORT,
      path: '0.0.0.0',
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
