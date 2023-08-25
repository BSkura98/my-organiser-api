import { Request, Response } from "express";

const posts = [
  {
    content: "Post content",
    authorId: 1,
  },
  {
    content: "Post content 2",
    authorId: 2,
  },
  {
    content: "Post content 3",
    authorId: 3,
  },
];

const getPosts = async (req: Request, res: Response) => {
  res.status(200).json(posts);
};

export { getPosts };
