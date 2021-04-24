CREATE DATABASE courses;


CREATE TABLE course(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(40)
)

INSERT INTO course (name, description) VALUES
    ('Learn English', 'ABC'),
    ('Learn Reactjs', 'DDD')