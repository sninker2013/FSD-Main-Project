import express, {Express} from "express";

const app: Express = express();

// test comment added for manual deployment
console.log("Trying deployment trigger");

app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

// Routes

// vercel automatically wraps and uses the app object in deployment
export default app;