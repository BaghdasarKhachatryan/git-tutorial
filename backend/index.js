import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hiiii");
});

app.listen(3001, () => {
  console.log("Server is running on 3001 port ...");
});
