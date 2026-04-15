const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://eaglercraft-xwdtvpgm.usw-1.sealos.app",
    changeOrigin: true,
    ws: true,
    secure: true
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Proxy running on port", port);
});
