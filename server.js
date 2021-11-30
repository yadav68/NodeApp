const expres = require("express");
const dotenv = require("dotenv");

//Load env vars

dotenv.config({ path: "./config/config.enc" });

const app = expres();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
