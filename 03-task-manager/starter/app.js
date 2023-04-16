require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");

const app = express();
const port = 5002;

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

//Keep in mind that all the middleware are in order

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
