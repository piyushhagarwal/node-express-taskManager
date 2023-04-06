const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const port = 3000;

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
