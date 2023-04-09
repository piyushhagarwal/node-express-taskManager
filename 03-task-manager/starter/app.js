require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

const port = 5002;

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
