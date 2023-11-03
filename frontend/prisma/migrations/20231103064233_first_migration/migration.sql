-- CreateTable
CREATE TABLE "account" (
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "userAccountId" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "accountId" TEXT NOT NULL,
    "authorisation" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("accountId")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_userAccountId_key" ON "account"("userAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "User_accountId_key" ON "User"("accountId");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "User"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
