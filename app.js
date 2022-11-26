require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handle");
const notFoundMiddlerware = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use(notFoundMiddlerware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
