import express from "express";
import {join, login} from "../controllers/userController";
import {trending, neew} from "../controllers/storiesController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/new", neew);
globalRouter.get("/join", join);
globalRouter.get("/login",login);


export default globalRouter;
