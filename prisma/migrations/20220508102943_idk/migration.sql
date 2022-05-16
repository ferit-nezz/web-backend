/*
  Warnings:

  - You are about to drop the column `userEventsId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the `UserEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_userId_fkey";

-- DropIndex
DROP INDEX "events_userEventsId_key";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "userEventsId";

-- DropTable
DROP TABLE "UserEvents";
