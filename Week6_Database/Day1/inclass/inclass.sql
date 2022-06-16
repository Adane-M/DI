-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1255'
--     LC_CTYPE = 'English_United States.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Scarlett','Jhohanson','12/06/1971', 4);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Beyonce','Knowless','12/06/1981',2);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Adane','melese','04/07/1984',1),
-- ('denzel','Washington','09/06/1961',3),
-- ('Will','Smith','02/04/1976',2);


SELECT * FROM actors;
