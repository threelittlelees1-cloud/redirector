const express = require("express");
const request = require("request");
const app = express();

app.use("/", (req, res) => {
  req.pipe(
    request("https://eaglercraft-xwdtvpgm.usw-1.sealos.app")
  ).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Proxy running on port", port);
});
