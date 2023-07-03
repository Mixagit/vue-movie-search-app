import Router from "express";
import MovieController from "./MovieController.js";
const router = new Router();

router.get("/movies", MovieController.getMovies);
router.get("/movies/:id", MovieController.getOne);

export default router;
