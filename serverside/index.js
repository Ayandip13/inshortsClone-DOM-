import express from "express";
import Connection from "./database/db.js";

const PORT = 8000;
Connection()

const app = express();

app.listen(PORT, () => {
  console.log(`Server running at Port: ${PORT}`);
});
