import { Router } from "express";
import { getUserWithPostAndComments, getPostWithAuthor } from "./special.controller.js";

const specialRouter = Router();

specialRouter.get('/user/:userId/post/:postId', getUserWithPostAndComments);
specialRouter.get('/post/:postId', getPostWithAuthor);

export default specialRouter;
