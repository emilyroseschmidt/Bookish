ALTER TABLE loan
ALTER COLUMN isbn TYPE bigint;

INSERT INTO book (title, isbn, total)
VALUES ('The Restaurant at the End of the Universe', 9780330262132, 4);

select *
from author;

INSERT INTO author (author_name)
VALUES ('Douglas Adams');

select *
from book;

UPDATE book
SET author_id = 1
WHERE total = 4
RETURNING *;


INSERT INTO author (author_name)
VALUES ('Jane Austen');

INSERT INTO author (author_name)
VALUES ('J. R. R. Tolkien');

INSERT INTO book (title, isbn, total)
VALUES ('So Long, and Thanks for All the Fish', 9780517554395, 2);

INSERT INTO book (title, isbn, total)
VALUES ('The Hitchhiker''s Guide to the Galaxy', 9780671527211, 2);

INSERT INTO book (title, isbn, total,author_id)
VALUES ('Pride and Prejudice', 9780192802385, 1,2),
('Sense and Sensibility', 9780333359532, 1,2),
 ('Emma ', 9780140434156, 5,2),
('Mansfield Park', 9780140430165, 11,2);

UPDATE book
SET author_id = 1
WHERE isbn =9780671527211
RETURNING *;

