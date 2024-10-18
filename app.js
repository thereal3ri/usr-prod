const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.message || "error";
  res.status(statusCode).json({
    status,
    message: "Something went wrong!",
  });
});

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Page not found!",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
