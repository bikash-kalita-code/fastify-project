const build = require('../../src/app');

let app;
describe('Root route', () => {
  // Before running any test cases
  beforeEach(() => {
    app = build();
  });

  // After running each test
  afterEach(() => {
    app.close();
  });

  it('should return 200 when root route called', async () => {
    const res = await app.inject({
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ hello: 'world!' });
  });
});
