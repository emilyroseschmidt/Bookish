CREATE TABLE Author(
	Author_ID SERIAL PRIMARY KEY,
	Author_Name VARCHAR(100)
);

CREATE TABLE Book(
	
	Title VARCHAR(100),
	ISBN INT UNIQUE PRIMARY KEY,
	Total INT,
	author_ID INT,
	CONSTRAINT fk_Author
		FOREIGN KEY(author_ID)
			REFERENCES author(author_ID)
);

CREATE TABLE Account(
	Username VARCHAR(100) UNIQUE PRIMARY KEY,
	User_Password VARCHAR(100),
	Full_Name VARCHAR(100)
);

CREATE TABLE Loan(
	Return_Date DATE,
	Username VARCHAR(100),
	ISBN INT,
	CONSTRAINT fk_Username
		FOREIGN KEY(Username)
			REFERENCES Account(Username),
	CONSTRAINT fk_ISBN
		FOREIGN KEY(ISBN)
			REFERENCES Book(ISBN)
);


select *
from account;
	