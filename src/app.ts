import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

//here routes;
import gameRoute from "./routes/gameRoute";

//here we will declare the routes paths
// app.get("/", (req: Request, res: Response) => {
//   res.send({ messsage: "NhutMinh IT" });
// });

app.use("/api/games", gameRoute);

export { app };
