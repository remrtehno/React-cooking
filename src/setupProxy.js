const { createProxyMiddleware } = require('http-proxy-middleware');

// Local ua-ks-cook-local
const addSourceInfo = (proxyReq) => {
  proxyReq.setHeader('x-immo-request', 'ua-ks-cook-local');
};

module.exports = function (app) {
  app.use(createProxyMiddleware('/cook/api', {
    target: 'http://vps8067.mtu.immo:6427',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/cook/api': '',
    },
  }));
  app.use(createProxyMiddleware('/cook/gate', {
    target: 'http://vps8067.mtu.immo:4151',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/cook/gate': '',
    },
  }));
  app.use(createProxyMiddleware('/cook/auth', {
    target: 'http://vps8067.mtu.immo:6798',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/cook/auth': '',
    },
  }));
  app.use(createProxyMiddleware('/cook/text', {
    target: 'http://9003.vps2085.mtu.immo',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    onProxyReq: addSourceInfo,
    pathRewrite: {
      '^/cook/text': '',
    },
  }));
};
