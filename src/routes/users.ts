import express from "express";

import { register, getUsers, login } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/register").post(register);
router.route("/login").post(login);

export default router;
