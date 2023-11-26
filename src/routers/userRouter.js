import express from "express";
import {users, see, edit} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/editProfile", edit);
userRouter.get("/:id", see);

export default userRouter;
