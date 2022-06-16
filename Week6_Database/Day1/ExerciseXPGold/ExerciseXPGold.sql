-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1255'
    LC_CTYPE = 'English_United States.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	CREATE TABLE students (
		id SERIAL PRIMARY KEY ,
		last_name VARCHAR(50) NOT NULL,
		first_name VARCHAR(35) NOT NULL,
		birth_date DATE 
);
-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

INSERT INTO students (last_name, first_name, birth_date)
VALUES 
('Marc', 'Benchou', '02/11/1998'),
('Yoan','Cohen','05/06/1991'),
('Lea',	'Benichou',	'08/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','04/06/2003'),
('Omer','Simpson','03/10/1980');


-- Select
-- Fetch all of the data from the table.
SELECT * FROM students;
-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students ORDER BY DESC(last_name) ;
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT * FROM students WHERE id = '2';
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT * FROM students where last_name='Benchou' AND first_name='Marc';
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT * FROM students where last_name='Benchou' OR first_name='Marc';
-- Fetch the students whose first_names contain the letter a.
SELECT * FROM students WHERE last_name LIKE '%a%'
-- Fetch the students whose first_names start with the letter a.
SELECT * FROM students WHERE last_name LIKE '%a'
-- Fetch the students whose first_names end with the letter a.
SELECT * FROM students WHERE first_name LIKE 'a%'
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT * FROM students substring('Lea' from 2 for 1);
--Fetch the students whose id’s are equal to 1 AND 3 .
SELECT * FROM students WHERE id='1' OR id='3';
--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date>='1/01/2000';
