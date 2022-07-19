require("dotenv").config();

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/projects", require("./routes/project"));
app.use("/api/v1/developers", require("./routes/developer"));

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});