import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'],// a cada aperacao que o priama fazer vai mostrar no log
});
