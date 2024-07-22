import { Router } from "express";
import { createPost, getPosts, updatePost, deletePost } from "./post.controller.js";

const postRouter = Router();

postRouter.post('/createpost', createPost);
postRouter.get('/getposts', getPosts);
postRouter.put('/updatepost/:id', updatePost);
postRouter.delete('/deletepost/:id', deletePost);

export default postRouter;
