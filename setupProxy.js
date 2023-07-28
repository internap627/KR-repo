const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/youtube',
    createProxyMiddleware({
      target: 'https://www.youtube.com',
      changeOrigin: true,
    })
  );
};
