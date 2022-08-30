import pg from "pg";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL, NODE_ENV, PORT } = process.env;

const app = express();

const port = process.env.PORT || 3000;
const pool = new pg.Pool({
    database: "idkyet",
    connectionString: DATABASE_URL,
});

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("member/:id", (req,res) => {
    console.log(req.params);
    const name = req.params.name;
    res.send
})