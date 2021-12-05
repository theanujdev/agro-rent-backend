const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const { PORT } = require("./config/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send("Server is up!");
});

app.use("/api", require("./routes"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
