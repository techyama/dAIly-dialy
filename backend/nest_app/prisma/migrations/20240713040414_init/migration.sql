/*
  Warnings:

  - The primary key for the `Diary` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Diary_pkey" PRIMARY KEY ("id");
