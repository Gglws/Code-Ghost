DROP TABLE IF EXISTS memberInfo;

CREATE TABLE memberInfo (
    id SERIAL,
    member_name TEXT,
    member_url TEXT
);

INSERT INTO memberInfo (member_name, member_url) VALUES ('Daeyeon', 'daeyeon@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Jeremy', 'jeremy@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Gage', 'gage@gmail.com');
INSERT INTO memberInfo (member_name, member_url) VALUES ('Robin', 'robin@gmail.com');