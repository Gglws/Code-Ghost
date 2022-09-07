import express from "express";
import pg from "pg";
import { readFile } from "fs/promises";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import ConnectPgSimple from "connect-pg-simple";
dotenv.config();
const PORT = process.env.PORT || 5001;

const pgSession = new ConnectPgSimple(session);
// const { DATABASE_URL, NODE_ENV, PORT} = process.env;

const app = express();
app.use(express.json());
app.use(express.static("build"));
app.use(cors());

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //     rejectUnauthorized: false
  // }
});
// get all users
app.get("/api/userAccountsAll", (req, res) => {
  pool.query("SELECT * FROM userAccounts").then((data) => {
    res.send(data.rows);
  });
});
//user sign up
app.post("/api/userAccounts", (req, res) => {
  const { email, password, fullName, company } = req.body;
  pool
    .query(
      "INSERT INTO userAccounts (email, password, fullName, company) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4) RETURNING *",
      [email, password, fullName, company]
    )
    .then((result) => {
      res.send(result.rows[0]);
    });
});
//user verification
app.post("/api/userSessions", (req, res) => {
  const { email, password } = req.body;
  pool
    .query(
      "SELECT id, fullname FROM userAccounts WHERE email = $1 AND password = crypt($2, password)",
      [email, password]
    )
    .then((data) => {
      if (data.rows.length < 1) {
        console.log("Invalid Email or Password.");
        return res.status(401).send("Invalid Email or Password.");
      }
    //   const { id, fullName } = data.rows[0];
    //   pool.query("INSERT INTO userSessions (userID) VALUES ($1)", [
    //     id,
    //     fullName,
    //   ]);
    //   console.log(data.rows);
      res.send(data.rows);
    });
});

// app.get("/api", (req, res) => {
//   readFile("public/index.html", "utf-8").then((string) => {
//     res.send(string);
//   });
// });

app.get("/api/member", (req, res) => {
  pool.query("SELECT * FROM memberInfo").then((data) => {
    res.send(data.rows);
  });
});

app.post("/api/member", (req, res) => {
  const { name, email, subject, message } = req.body;
  pool
    .query(
      `INSERT INTO memberInfo(name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [name, email, subject, message]
    )
    .then((data) => {
      console.log(data);
      if (data.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(data.rows[0]);
      }
    });
});

//here
// app.use(session({
//     store: new pgSession({
//         pool : pool
//       // Insert connect-pg-simple options here
//     }),
//     secret: 'something', //process.env.SESSION_SECRET
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
//     // Insert express-session options here
//   }));

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
