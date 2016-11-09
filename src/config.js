module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  devPort: process.env.DEV_PORT || 3002,
  hotLoadPort: process.env.HOT_LOAD_PORT || 3005,
  app: {
    title: 'My App'
  }
};
