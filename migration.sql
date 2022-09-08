DROP TABLE IF EXISTS memberInfo;
DROP TABLE IF EXISTS userAccounts;
DROP TABLE IF EXISTS userSessions;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE memberInfo (
    id SERIAL,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT,
    date TEXT
);

CREATE TABLE userAccounts (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    fullName TEXT NOT NULL,
    company TEXT
);
CREATE TABLE userSessions (
    id SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL
);


INSERT INTO userAccounts (email, password, fullName, company) VALUES ('johndoe@mail.com',
 crypt('johnspassword', gen_salt('bf')),
  'John Doe', 'USMC');



