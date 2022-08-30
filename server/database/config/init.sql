BEGIN;
DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    user_id INTEGER,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO users (user_name, password, email) values 
('ahmed', 'ahmed123', 'ahmed33@gmail.com'),
('omar', 'omar123', 'omar33@gmail.com');

INSERT INTO posts(title, content, image, user_id) values 
('first post', 'content for first post','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg','1'),
('second post', 'content for second post','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg','1');








COMMIT;