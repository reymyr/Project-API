require("dotenv").config();

const port = process.env.PORT || 5000;

const server = require('./server');

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});