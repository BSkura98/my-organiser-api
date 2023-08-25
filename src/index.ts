import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { createApp } from "./app.js";

dotenv.config();

const app = createApp();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
