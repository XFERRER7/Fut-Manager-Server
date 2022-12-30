/*
  Warnings:

  - A unique constraint covering the columns `[teamId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Player_teamId_key" ON "Player"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_userId_key" ON "Team"("userId");
