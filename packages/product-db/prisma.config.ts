import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

// 👇 This line ensures Prisma loads your .env file
dotenv.config({ path: "./.env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
