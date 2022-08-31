DROP TABLE IF EXISTS memberInfo;

CREATE TABLE memberInfo (
    id SERIAL,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT
);

INSERT INTO memberInfo (name, email, subject, message) VALUES ('Daeyeon', 'daeyeon@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Jeremy', 'jeremy@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Gage', 'gage@gmail.com', 'subject', 'message');
INSERT INTO memberInfo (name, email, subject, message) VALUES ('Robin', 'robin@gmail.com', 'subject', 'message');