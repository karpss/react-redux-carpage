/* eslint-disable */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
      createProxyMiddleware('/offers.json',
      {

        target: "http://cdn.sixt.io/codingtask",
        changeOrigin:true
        
      })
   );};