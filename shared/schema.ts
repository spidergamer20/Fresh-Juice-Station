import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  isAdmin: boolean("is_admin").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  ingredients: text("ingredients").notNull(),
  image: text("image").notNull(),
  smallPrice: integer("small_price").notNull(),
  largePrice: integer("large_price").notNull(),
  categoryId: varchar("category_id").references(() => categories.id),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  productId: varchar("product_id").notNull().references(() => products.id),
  size: text("size").notNull(), // 'small' or 'large'
  quantity: integer("quantity").notNull(),
  total: integer("total").notNull(),
  paymentMethod: text("payment_method").notNull(),
  status: text("status").notNull().default("pending"), // 'pending', 'completed', 'cancelled'
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  isAdmin: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  description: true,
  isActive: true,
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  ingredients: true,
  image: true,
  smallPrice: true,
  largePrice: true,
  categoryId: true,
  isActive: true,
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  customerName: true,
  phone: true,
  address: true,
  productId: true,
  size: true,
  quantity: true,
  total: true,
  paymentMethod: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;
