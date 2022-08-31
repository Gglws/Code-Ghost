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

INSERT INTO memberInfo (member_name, member_url) VALUES ('Daeyeon', 'daeyeon@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Jeremy', 'jeremy@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Gage', 'gage@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Robin', 'robin@gmail.com');
INSERT INTO userAccounts (email, password, fullName, company) VALUES ('johndoe@mail.com',
 crypt('johnspassword', gen_salt('bf')),
  'John Doe', 'USMC');