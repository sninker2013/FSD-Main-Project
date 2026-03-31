import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import corsOptions from "../config/cors";
import setupSwagger from "../config/swagger";
import reviewRoutes from "./api/v1/routes/reviewRoutes";

import friendsRoutes from "./api/v1/routes/friendsRoutes";

import gameRoutes from "./api/v1/routes/gameRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";

const app: Express = express();

dotenv.config();
app.use(morgan("combined"));
app.use(express.json());
app.use(cors(corsOptions));
setupSwagger(app);

app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

//Put routes here
app.use("/api/v1/reviews", reviewRoutes);

app.use("/api/v1/friends", friendsRoutes);

app.use("/api/v1/games", gameRoutes);

app.use(errorHandler);

export default app;