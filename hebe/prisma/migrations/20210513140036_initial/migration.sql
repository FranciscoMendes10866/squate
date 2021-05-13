-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "emergency" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measurement" (
    "id" TEXT NOT NULL,
    "peitoral" INTEGER NOT NULL,
    "quadril" INTEGER NOT NULL,
    "cintura" INTEGER NOT NULL,
    "coxa" INTEGER NOT NULL,
    "braco" INTEGER NOT NULL,
    "bracoContraido" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanita" (
    "id" TEXT NOT NULL,
    "gordura_corpural" INTEGER NOT NULL,
    "massa_muscular" INTEGER NOT NULL,
    "massa_ossea" INTEGER NOT NULL,
    "imc" INTEGER NOT NULL,
    "metabolismo_basal" INTEGER NOT NULL,
    "idade_metabolica" INTEGER NOT NULL,
    "agua" INTEGER NOT NULL,
    "gordura_visceral" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.code_unique" ON "User"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.user_id_unique" ON "Profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Measurement.user_id_unique" ON "Measurement"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tanita.user_id_unique" ON "Tanita"("user_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurement" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tanita" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
