import dotenv from "dotenv";

import { createApp } from "./app.js";
import { AppDataSource } from "./AppDataSource.js";

dotenv.config();

const app = createApp();
const port = process.env.PORT || 8080;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
