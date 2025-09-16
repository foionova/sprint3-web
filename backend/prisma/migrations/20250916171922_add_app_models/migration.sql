-- CreateTable
CREATE TABLE "public"."Time" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "logoUrl" TEXT,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Jogadora" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "posicao" TEXT NOT NULL,
    "timeId" TEXT NOT NULL,

    CONSTRAINT "Jogadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Partida" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "timeCasaId" TEXT NOT NULL,
    "timeForaId" TEXT NOT NULL,
    "golsCasa" INTEGER NOT NULL DEFAULT 0,
    "golsFora" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Noticia" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "imagemUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Time_nome_key" ON "public"."Time"("nome");

-- AddForeignKey
ALTER TABLE "public"."Jogadora" ADD CONSTRAINT "Jogadora_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "public"."Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Partida" ADD CONSTRAINT "Partida_timeCasaId_fkey" FOREIGN KEY ("timeCasaId") REFERENCES "public"."Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Partida" ADD CONSTRAINT "Partida_timeForaId_fkey" FOREIGN KEY ("timeForaId") REFERENCES "public"."Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
