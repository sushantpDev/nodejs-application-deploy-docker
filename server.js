import express from "express";

const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.json({message : "hey i am here"});
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});