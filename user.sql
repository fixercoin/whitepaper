CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(255),
  balance INT
);

CREATE TABLE transactions (
  id INT PRIMARY KEY,
  sender_id INT,
  receiver_id INT,
  amount INT
);
