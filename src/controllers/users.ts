import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  name: string;
  password: string;
}

const users: User[] = [];

const getUsers = async (req: Request, res: Response) => {
  res.status(200).json(users);
};

const addUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
};

const login = async (req: Request, res: Response) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(404).send("User not found");
  }
  try {
    if (await compare(req.body.password, user.password)) {
      const userData = { name: user.name };

      const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch {
    res.status(500).send();
  }
};

export { getUsers, addUser, login };
