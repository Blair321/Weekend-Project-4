CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/Family.jpg', 'My Family', 'Full family a few years back.'),
('images/GFandMe.jpeg', 'My Gf and Me', 'Photo of me and my GF in a Park.'),
('images/huntinghobby.jpeg', 'Duck Hunting', 'Rare duck I hunted last year.'),
('images/meandmom.jpg', 'Mom and Me', 'Walking mom down the aisle.'),
('images/piersonandme.JPG', 'Me and Pup', 'Me and my childhood dog.'),
('images/step-family.jpg', 'My step family', 'My step family and me at a wedding.');

SELECT * FROM "gallery" ORDER BY id ASC;
DELETE FROM "gallery" WHERE id=2;
UPDATE "gallery" SET likes=likes+1 WHERE id=4;
  