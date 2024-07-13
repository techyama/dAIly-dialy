/*
  Warnings:

  - The primary key for the `Diary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Diary` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserAuth` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Diary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_userId_fkey";

-- AlterTable
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_pkey",
DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "Diary_pkey" PRIMARY KEY ("user_id", "recordDate");

-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
