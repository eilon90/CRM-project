USE crm_project;

-- CREATE TABLE country(
--     c_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- CREATE TABLE owner(
--     o_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- CREATE TABLE email_type(
--     e_t_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     type VARCHAR(1)
-- );

-- CREATE TABLE client(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     email VARCHAR(40),
--     first_contact VARCHAR(40),
--     sold BOOLEAN,
--     email_type_id INT,
--     owner_id INT,
--     country_id INT,

--     FOREIGN KEY(email_type_id) REFERENCES email_type(e_t_id),
--     FOREIGN KEY(owner_id) REFERENCES owner(o_id),
--     FOREIGN KEY(country_id) REFERENCES country(c_id)
-- );

-- DROP TABLE client;

