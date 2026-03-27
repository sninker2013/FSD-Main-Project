-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "gameName" TEXT NOT NULL,
    "coverPicture" TEXT NOT NULL,
    "gameDescription" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friend" (
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,
    "isFavourite" BOOLEAN NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("userId","friendId")
);

-- CreateTable
CREATE TABLE "Review" (
    "gameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "dateEditted" TIMESTAMP(3),
    "stars" INTEGER NOT NULL,
    "reviewContents" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("gameId","userId","dateCreated")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
