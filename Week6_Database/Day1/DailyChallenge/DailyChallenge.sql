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
SELECT COUNT(*) FROM actors;
SELECT * FROM actors;
INSERT INTO actors(first_name, last_name,age, number_oscars)
VALUES ( 'HBM','nbjbh' ,'06\05\1952' ,2 );
--SELECT * FROM actors; -- if values are empty it gives an error
