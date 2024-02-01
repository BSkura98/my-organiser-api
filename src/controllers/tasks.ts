import { Request, Response } from "express";

enum TaskStatus {
  toDo = "To do",
  inProgress = "In progress",
  done = "Done",
}

const tasks = [
  {
    userId: 2,
    projectId: 1,
    name: "First task",
    status: TaskStatus.inProgress,
  },
  {
    projectId: 2,
    userId: 8,
    name: "Second task",
    description: "This is some task",
    status: TaskStatus.toDo,
  },
  {
    projectId: 3,
    userId: 7,
    name: "Third task",
    status: TaskStatus.done,
  },
];

const getTasks = async (req: Request, res: Response) => {
  res.status(200).json(tasks);
};

export { getTasks };
