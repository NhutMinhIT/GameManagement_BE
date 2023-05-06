import { Router } from "express";
import {
  createGame,
  getAllGames,
  getGamebyId,
} from "../controllers/gameController";

const router: Router = Router();

router.get("/", getAllGames);
router.get("/game/:id", getGamebyId);
router.post("/game", createGame);

export default router;
