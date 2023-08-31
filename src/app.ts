import express, { Express } from "express";

import posts from "./routes/posts.js";
import users from "./routes/users.js";
import { authenticateToken } from "./middleware/authenticateToken.js";

export const createApp = () => {
  const app: Express = express();

  app.use(express.json({ limit: "50mb" }));

  app.use("/users", users);
  app.use("/posts", authenticateToken, posts);

  return app;
};
