import express from "express";

import { addUser, getUsers, login } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);
router.route("/login").post(login);

export default router;
