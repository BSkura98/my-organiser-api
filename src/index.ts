import dotenv from "dotenv";

import { createApp } from "./app.js";
import { AppDataSource } from "./AppDataSource.js";

dotenv.config();

const app = createApp();
const port = process.env.PORT || 8080;

const databaseInitialized = await AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    return true;
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
    return false;
  });

if (databaseInitialized) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
