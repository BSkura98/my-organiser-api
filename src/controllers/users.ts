import { Request, Response } from "express";
import { hash } from "bcrypt";

interface User {
  username: string;
  password: string;
}

const users: User[] = [];

const getUsers = async (req: Request, res: Response) => {
  res.status(200).json(users);
};

const addUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
};

export { getUsers, addUser };
