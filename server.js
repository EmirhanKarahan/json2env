const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "public");

express()
  .use(express.static(publicPath))
  .get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  })
  .listen(port, () => {
    console.log("Server is up, " + port);
  });
