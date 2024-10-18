const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({
  path: `${__dirname}/.env`,
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
