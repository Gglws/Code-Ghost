DROP TABLE IF EXISTS memberInfo;
DROP TABLE IF EXISTS userAccounts;
DROP TABLE IF EXISTS userSessions;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE memberInfo (
    id SERIAL,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT
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

INSERT INTO memberInfo (name, email, subject, message) VALUES ('Daeyeon', 'daeyeon@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Jeremy', 'jeremy@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Gage', 'gage@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Robin', 'robin@gmail.com', 'subject', 'message');
INSERT INTO userAccounts (email, password, fullName, company) VALUES ('johndoe@mail.com',
 crypt('johnspassword', gen_salt('bf')),
  'John Doe', 'USMC');



