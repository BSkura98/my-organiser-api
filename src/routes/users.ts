import express from "express";

import { addUser, getUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);

export default router;
