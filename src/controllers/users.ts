import { Request, Response } from "express";

interface User {
  username: string;
  password: string;
}

const users: User[] = [];

const getUsers = async (req: Request, res: Response) => {
  res.status(200).json(users);
};

const addUser = async (req: Request, res: Response) => {
  const user = { username: req.body.username, password: req.body.password };
  users.push(user);
  res.status(201).send();
};

export { getUsers, addUser };
