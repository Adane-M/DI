-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

CREATE DATABASE "Exercises_In_Class"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1255'
    LC_CTYPE = 'English_United States.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- 	Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the orders table and the items table. An order can have many items, but an item can belong to only one order.

-- Create a function that returns the total price for a given order.

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(25),
    price INT
)
INSERT INTO itemS (item_name, price)
VALUES ('table',25),('chair',50),('ps5',520);
	
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
	cusromer_name VARCHAR(25),
    item_id INT REFERENCES items(item_id)
)
INSERT INTO orders (customer_id,item_id)
VALUES (1,3),(5,1),(1,2);
SELECT
	items.item_id, 
	SUM (price) AS total
FROM
	items
	INNER JOIN  orders ON
	orders.item_id = items.item_id
GROUP BY
items.item_id
ORDER BY total;	
--BONUS
--Create a table called users.
--There should be a one to many relationship between the users table and the orders table.

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(50),
	customer_id INT REFERENCES orders(customer_id)
)
INSERT INTO users (user_name, customer_id)
VALUES ('adane',1),('di',5),('bootcamp',1);

SELECT * FROM orders


--Create a function that returns the total price for a given order of a given user.

SELECT
	items.item_id,users.customer_id 
	SUM (price) AS total
FROM
	items
	INNER JOIN  orders ON
	orders.item_id = items.item_id
INNER JOIN users ON
users.customer_id = orders.customer_id

GROUP BY
items.item_id,
users.customer_id
ORDER BY total;	
