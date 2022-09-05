INSERT INTO
    user (username, email, password)
VALUES
    ('admin', 'admin@example.com', SHA1('adminsecret')),
    ('user1', 'user1@example.com', SHA1('user1secret')),
    ('user2', 'user2@example.com', SHA1('user2secret')),
    ('user3', 'user3@example.com', SHA1('user3secret'));

INSERT INTO
    role (name)
VALUES
    ('administrator'),
    ('content_editor'),
    ('signed_in');

INSERT INTO
    user_roles_role (`userId`, `roleId`)
VALUES
    ((SELECT id FROM user WHERE username = 'admin'), (SELECT id FROM role WHERE name = 'administrator')),
    ((SELECT id FROM user WHERE username = 'user1'), (SELECT id FROM role WHERE name = 'content_editor')),
    ((SELECT id FROM user WHERE username = 'user1'), (SELECT id FROM role WHERE name = 'signed_in')),
    ((SELECT id FROM user WHERE username = 'user2'), (SELECT id FROM role WHERE name = 'content_editor')),
    ((SELECT id FROM user WHERE username = 'user3'), (SELECT id FROM role WHERE name = 'signed_in'));
