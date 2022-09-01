DROP TABLE IF EXISTS memberInfo;
DROP TABLE IF EXISTS userAccounts;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE memberInfo (
    id SERIAL,
    member_name TEXT,
    member_url TEXT,
    member_description TEXT
);

CREATE TABLE userAccounts (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    fullName TEXT NOT NULL,
    company TEXT
);

INSERT INTO memberInfo (name, email, subject, message) VALUES ('Daeyeon', 'daeyeon@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Jeremy', 'jeremy@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Gage', 'gage@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Robin', 'robin@gmail.com', 'subject', 'message');
INSERT INTO userAccounts (email, password, fullName, company) VALUES ('johndoe@mail.com',
 crypt('johnspassword', gen_salt('bf')),
  'John Doe', 'USMC');



