DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon; 

USE bamazon;

create table products(

item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price INT default 0,
stock_quantity INT default 0,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("RC Car", "Toys", 50, 100),
("Sunglasses", "Clothing", 250, 25),
("Headphones", "Electronics", 100, 33),
("Bottled Water", "Grocery", 3, 50),
("Paper Plates", "Grocery", 5, 77),
("Football Helmet", "Sporting Goods", 100, 5),
("Keyboard", "Electronics", 15, 15),
("Couch", "Furniture", 650, 5),
("Rocking Chair", "Furniture", 150, 10),
("Refrigerator", "Appliances", 600, 18)