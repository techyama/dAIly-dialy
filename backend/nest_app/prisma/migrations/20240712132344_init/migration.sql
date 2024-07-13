-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "age" INTEGER,
    "gender" VARCHAR(8),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAuth" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "identityType" VARCHAR(30) NOT NULL,
    "identifier" VARCHAR(100) NOT NULL,
    "credential" VARCHAR(30) NOT NULL,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diary" (
    "userId" INTEGER NOT NULL,
    "recordDate" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(128) DEFAULT 'untitled',
    "content" TEXT NOT NULL,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("userId","recordDate")
);

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
