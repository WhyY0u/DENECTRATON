CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    surname VARCHAR(45) NOT NULL,
    patronymic VARCHAR(45) NOT NULL,
    login VARCHAR(45) NOT NULL UNIQUE,
    email VARCHAR(256) NOT NULL UNIQUE,
    token VARCHAR(512),
    password VARCHAR(256) NOT NULL,
    role ENUM('Employer', 'Worker') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE card (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    post_name VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL DEFAULT 'card'
);

CREATE TABLE skills (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    user_card_entity_id BIGINT,
    FOREIGN KEY (user_card_entity_id) REFERENCES card(id) ON DELETE CASCADE
);

CREATE TABLE profile (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(45),
    avatar_url VARCHAR(255),
    curntSocial FLOAT,
    description VARCHAR(100)
);

CREATE TABLE socialnetwork (
    user_id BIGINT,
    socialnetwork VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES profile(id) ON DELETE CASCADE
);

CREATE TABLE followers (
    user_id BIGINT,
    follower BIGINT,
    FOREIGN KEY (user_id) REFERENCES profile(id) ON DELETE CASCADE
);

CREATE TABLE following (
    user_id BIGINT,
    following BIGINT,
    FOREIGN KEY (user_id) REFERENCES profile(id) ON DELETE CASCADE
);

CREATE TABLE skill (
    user_id BIGINT,
    skill_name VARCHAR(255),
    skil_value INT,
    FOREIGN KEY (user_id) REFERENCES profile(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, skill_name)
);

CREATE TABLE Comment (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    user_id BIGINT NOT NULL,
    user_avatar VARCHAR(255) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    user_surname VARCHAR(100) NOT NULL,
    user_patronymic VARCHAR(100) NOT NULL
);

CREATE TABLE comment_images (
    comment_id BIGINT,
    images_id INT,
    images_value VARCHAR(255),
    FOREIGN KEY (comment_id) REFERENCES Comment(id) ON DELETE CASCADE,
    PRIMARY KEY (comment_id, images_id)
);

CREATE TABLE Event (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    organisation_id BIGINT NOT NULL,
    postName VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    place VARCHAR(255) NOT NULL,
    startDate DATE NOT NULL,
    UNIQUE (organisation_id),
    UNIQUE (postName),
    UNIQUE (name),
    UNIQUE (description),
    UNIQUE (date),
    UNIQUE (place),
    UNIQUE (startDate)
);

CREATE TABLE event_images (
    event_id BIGINT,
    images_id INT,
    images_value VARCHAR(255),
    FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE,
    PRIMARY KEY (event_id, images_id)
);

CREATE TABLE vacancy (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    organisation_id BIGINT NOT NULL,
    type VARCHAR(255) NOT NULL, 
    name VARCHAR(255) NOT NULL,
    money DECIMAL(19, 2),
    description TEXT NOT NULL,
    time VARCHAR(255) NOT NULL,
    secured BOOLEAN NOT NULL
);

CREATE TABLE vacancy_skill (
    vacancy_id BIGINT,
    skill_name VARCHAR(255),
    skill_value INT,
    FOREIGN KEY (vacancy_id) REFERENCES vacancy(id) ON DELETE CASCADE,
    PRIMARY KEY (vacancy_id, skill_name)
);

CREATE TABLE vacancy_images (
    vacancy_id BIGINT,
    images_id INT,
    images_value VARCHAR(255),
    FOREIGN KEY (vacancy_id) REFERENCES vacancy(id) ON DELETE CASCADE,
    PRIMARY KEY (vacancy_id, images_id)
);
