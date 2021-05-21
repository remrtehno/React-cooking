const { createProxyMiddleware } = require('http-proxy-middleware');

// Local ua-ks-cook-local
const addSourceInfo = (proxyReq) => {
  proxyReq.setHeader('x-immo-request', 'ua-ks-cook-local');
};

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://vps8067.mtu.immo:6427',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/api': '',
    },
  }));
  app.use(createProxyMiddleware('/gate', {
    target: 'http://vps8067.mtu.immo:4151',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/gate': '',
    },
  }));
  app.use(createProxyMiddleware('/auth', {
    target: 'http://vps8067.mtu.immo:6798',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/auth': '',
    },
  }));
  app.use(createProxyMiddleware('/text', {
    target: 'http://9003.vps2085.mtu.immo',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/text': '',
    },
  }));
};
