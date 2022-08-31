import express from "express";
import pg from "pg";
import { readFile } from "fs/promises";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const PORT = 5000;
// const { DATABASE_URL, NODE_ENV, PORT} = process.env;

const app = express();
app.use(express.json());
app.use(express.static('/..public')); 
app.use(cors());

const pool = new pg.Pool({
    database: 'fec'
    // connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

app.get("/api", (req, res) => {
    readFile("public/index.html", "utf-8").then(string => {
        res.send(string);
    });
});

app.get("/api/member", (req, res) => {
    pool.query('SELECT * FROM memberInfo').then((data) => {
        res.send(data.rows);
    });
});

app.post("/api/member", (req, res) => {

    const {name, email, subject, message} = req.body
    pool.query(`INSERT INTO memberInfo(name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [name, email, subject, message])
    .then((data) => {
        console.log(data);
        if (data.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(data.rows[0]);
        }
    })
});

app.use((err, req, res, next)=> {
    res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});