import { Router } from "express";
import { createComment, getComments, updateComment, deleteComment } from "./comment.controller.js";

const commentRouter = Router();

commentRouter.post('/createcomment', createComment);
commentRouter.get('/getcomments', getComments);
commentRouter.put('/updatecomment/:id', updateComment);
commentRouter.delete('/deletecomment/:id', deleteComment);

export default commentRouter;
