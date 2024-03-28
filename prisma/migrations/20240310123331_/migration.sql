-- AlterTable
ALTER TABLE `songs` MODIFY `albumUrl` VARCHAR(1000) NULL;

-- CreateTable
CREATE TABLE `playlist_items` (
    `playlist_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `song_id` INTEGER NOT NULL,
    `addedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`playlist_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `playlist_items` ADD CONSTRAINT `playlist_items_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist_items` ADD CONSTRAINT `playlist_items_song_id_fkey` FOREIGN KEY (`song_id`) REFERENCES `songs`(`song_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
