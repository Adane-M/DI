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
	
	-- Part I
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE customer (
	id SERIAL PRIMARY KEY, 
	first_name VARCHAR(30), 
	last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_profile (
	p_id SERIAL PRIMARY KEY, 
	isLoggedIn BOOLEAN DEFAULT false, 
	customer_id INTEGER UNIQUE REFERENCES customer(id)
);

-- Insert some data, use subqueries
INSERT INTO customer (first_name,last_name) VALUES 
('John', 'Smith'),
('Moses', 'Malone'),
('Menashe', 'Noy');
INSERT INTO customer (first_name,last_name) VALUES 
('Moishe','Zukhmir');

INSERT INTO customer_profile (isLoggedIn,customer_id) VALUES
(true, 1),
(true,2),
(false,3);
INSERT INTO customer_profile (isLoggedIn,customer_id) VALUES
(null,4);
-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT first_name FROM customer INNER JOIN customer_profile ON id=customer_id WHERE isLoggedIn=true;

-- All the customers even if the isLoggedIn column is null
SELECT first_name FROM customer LEFT JOIN customer_profile ON id=customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*) FROM customer JOIN customer_profile ON id=customer_id WHERE isLoggedIn=false;

-- Part II:
-- Create a table named Book, with the columns : id, title NOT NULL, author NOT NULL
CREATE TABLE book (
	id SERIAL PRIMARY KEY,
	title VARCHAR (30) NOT NULL,
	author VARCHAR(30) nOT NULL
);

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- CREATE TYPE age_below_15;

-- Create a table named Student, with the columns : id, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL UNIQUE,
	age SMALLINT
)
-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)


-- Create a table named Library, with the columns :
-- book_id ON DELETE CASCASE ON UPDATE CASCADE
-- student_id ON DELETE CASCASE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
CREATE TABLE library (
	book_id INTEGER REFERENCES book(id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id INTEGER REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE
)

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice in Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice in Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO library (book_id,student_id,borrowed_date) VALUES
((SELECT id FROM book WHERE title ILIKE 'Alice in Wonderland'), (SELECT id FROM student WHERE name='John'), '15/02/2022'),
((SELECT id FROM book WHERE title ILIKE 'To kill a mockingbird'),(SELECT id FROM student WHERE name='Bob'), '03/03/2021'),
((SELECT id FROM book WHERE title ILIKE 'Alice in Wonderland'),(SELECT id FROM student WHERE name='Lera'),'23/05/2021'),
((SELECT id FROM book WHERE title ILIKE 'Harry Potter'),(SELECT id FROM student WHERE name='Bob'), '12/08/2021');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library;

-- Select the name and title of the borrowed books
SELECT name, title FROM student 
JOIN library ON student.id=library.student_id
JOIN book ON library.book_id=book.id

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT ROUND(AVG(age),1) FROM student 
JOIN library ON student.id=library.student_id
JOIN book ON library.book_id=book.id
WHERE book.title ILIKE 'Alice in Wonderland';

-- Delete a student from the Student table, what happened in the junction table ? ANSWER: It deleted the record from library table as well due to DELETE CASCADE constraint
DELETE FROM student WHERE id=1;
