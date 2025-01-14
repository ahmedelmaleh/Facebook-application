import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "./user.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);

export default userRouter;
