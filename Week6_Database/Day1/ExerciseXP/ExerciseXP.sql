-- Database: public
 -- DROP DATABASE IF EXISTS public;
 -- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1255'
--     LC_CTYPE = 'English_United States.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
-- Exercise 1 : Items And Customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.
-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR (30) NOT NULL,
-- 	item_price SMALLINT NOT NULL DEFAULT 0
-- );
-- CREATE TABLE customers (
--   customer_id SERIAL PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(50) NOT NULL
-- );
 -- Follow the instructions below to determine which columns and data types to add to the two tables:
 -- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80
-- INSERT INTO items (item_name, item_price) VALUES
-- ('Small Desk' , 100),
-- ('Large desk', 300),
-- ('Fan', 80);
 -- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson
-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johanson');
 -- Use SQL to fetch the following data from the database:
-- All the items.

SELECT *
FROM ITEMS;

-- All the items with a price above 80 (80 not included).

SELECT *
FROM ITEMS
WHERE ITEM_PRICE > 80;

-- All the items with a price below 300. (300 included)

SELECT *
FROM ITEMS
WHERE ITEM_PRICE <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).

SELECT *
FROM CUSTOMERS
WHERE LAST_NAME ILIKE 'Smith';

-- empety table
 -- All customers whose last name is ‘Jones’.

SELECT *
FROM CUSTOMERS
WHERE LAST_NAME ILIKE 'Jones';

-- All customers whose firstname is not ‘Scott’.

SELECT *
FROM CUSTOMERS
WHERE FIRST_NAME = 'Scott';