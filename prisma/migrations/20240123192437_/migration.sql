-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `registration_date` DATETIME(3) NULL,
    `age` INTEGER NULL,
    `gender` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `songs` (
    `song_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NULL,
    `release_date` DATETIME(3) NULL,
    `genre` VARCHAR(191) NULL,
    `duration` INTEGER NULL,
    `mp3Path` VARCHAR(191) NULL,

    PRIMARY KEY (`song_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_songs` (
    `user_song_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `song_id` INTEGER NOT NULL,
    `play_count` INTEGER NOT NULL DEFAULT 0,
    `liked` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`user_song_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_songs` ADD CONSTRAINT `user_songs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_songs` ADD CONSTRAINT `user_songs_song_id_fkey` FOREIGN KEY (`song_id`) REFERENCES `songs`(`song_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
