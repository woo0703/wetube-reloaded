import express from "express";
import {see, edit, deleteStory} from "../controllers/storiesController";



const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)",see);
storyRouter.get("/:id/edit",edit);
storyRouter.get("/:id/delete",deleteStory);


export default storyRouter;

