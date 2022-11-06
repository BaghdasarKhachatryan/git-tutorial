import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hiiii");
});

app.listen(3002, () => {
  console.log("Server is running on 3001 port ...");
});
