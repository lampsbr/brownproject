import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "@kripod/uuidv7";
import { sql } from "drizzle-orm";

export const usersTable = sqliteTable("users_table", {
  id: text().primaryKey().$defaultFn(() => uuidv7()),
  name: text().notNull(),
  birth: int({ mode: "timestamp" }),
  email: text().notNull().unique(),
  createdAt: text().notNull().default(sql`CURRENT_TIMESTAMP`),
});