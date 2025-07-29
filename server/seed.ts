import { db } from "./db";
import { products } from "@shared/schema";

async function seedDatabase() {
  console.log("🌱 Seeding database...");
  
  // Sample products
  const sampleProducts = [
    {
      name: "Mango Magic",
      ingredients: "Fresh Mango, Milk, Honey",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 250,
      largePrice: 400,
      isActive: true,
    },
    {
      name: "Green Juice",
      ingredients: "Spinach, Cucumber, Fresh Lemon",
      image: "https://images.unsplash.com/photo-1553978297-667ad6498f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 280,
      largePrice: 420,
      isActive: true,
    },
    {
      name: "Red Rush",
      ingredients: "Fresh Carrot, Beetroot, Apple",
      image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 260,
      largePrice: 390,
      isActive: true,
    },
    {
      name: "Paradise",
      ingredients: "Fresh Dates, Peach, Apple",
      image: "https://images.unsplash.com/photo-1622597468836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 270,
      largePrice: 410,
      isActive: true,
    },
    {
      name: "Feel Good",
      ingredients: "Watermelon, Strawberry, Mango",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 290,
      largePrice: 440,
      isActive: true,
    },
    {
      name: "Purple Power",
      ingredients: "Watermelon, Beetroot, Carrot",
      image: "https://images.unsplash.com/photo-1560963805-6c64417e5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      smallPrice: 275,
      largePrice: 415,
      isActive: true,
    }
  ];

  try {
    // Check if products already exist
    const existingProducts = await db.select().from(products);
    
    if (existingProducts.length === 0) {
      await db.insert(products).values(sampleProducts);
      console.log("✅ Sample products inserted successfully!");
    } else {
      console.log("ℹ️ Products already exist, skipping seed");
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

// Run seed automatically when imported
seedDatabase();

export { seedDatabase };