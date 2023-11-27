import express from "express";
import {users, seee, edit} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/editProfile", edit);
userRouter.get("/:id", seee);

export default userRouter;
