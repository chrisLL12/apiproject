-- Create cameras table in database
create table cameras (
    id serial,
    title varchar(100),
    rating integer,
    review varchar(500)
);

create table users (
    id serial,
    display_name varchar(100),
    username varchar(25),
    created_on timestamp,
    last_login timestamp
);

create table categories (
    cameras_id integer,
    users_id integer
);

--SELECT cm.title, u.display_name
----FROM cameras cm
----JOIN categories ct ON cm.id = ct.cameras_id
----JOIN users u ON ct.users_id = u.id
----WHERE cm.id = 1;