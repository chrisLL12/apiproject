-- Add seed data to cameras table
INSERT INTO cameras (id, title, rating, review)
VALUES
(1, 'Camera TX 221', 5, 'Really great camera! Would recommend!'),
(2, 'SmallCamera PX 2', 4, 'Cool camera! Its pretty good!'),
(3, 'SlimCamera RTE 500', 4, 'Nice camera! Worth getting.'),
(4, 'SuperPixels PR 400', 3, 'A decent camera. Can be better though.'),
(5, 'LTCamera RTE 250', 2, 'Could be better. It works but needs improvement.');

INSERT INTO users (id, display_name, username, created_on, last_login)
VALUES
(1, 'rt12', 'rtaylor12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Edoug2', 'eedougs43', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'rfre', 'fre342', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'colson24', 'colson342', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'terry72', 'rrterry342', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO categories (cameras_id, users_id)
VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5);

