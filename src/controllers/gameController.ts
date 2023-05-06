import { Request, Response } from "express";
import Game from "../models/Game";

export const getAllGames = async (req: Request, res: Response) => {
  const games = await Game.find();
  try {
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const getGamebyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const game = await Game.findById({ _id: id });
  try {
    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const createGame = async (req: Request, res: Response) => {
  const gameToCreate = await Game.create(req.body);
  try {
    return res.status(201).json(gameToCreate);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};
