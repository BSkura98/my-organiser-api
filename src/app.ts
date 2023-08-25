import express, { Express } from "express";

import posts from "./routes/posts.js";

export const createApp = () => {
  const app: Express = express();

  app.use(express.json({ limit: "50mb" }));

  app.use("/posts", posts);

  return app;
};
