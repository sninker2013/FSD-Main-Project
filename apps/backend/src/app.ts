import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
app.use(morgan("combined"));
app.use(express.json());

app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

//Put routes here

export default app;