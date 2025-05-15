"use server";
import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";
export const registerUser = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = "admin";

  // Validate the data
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Connect to the database
  try {
    const client = await clientPromise;
    const db = client.db("pcbuilder");
    const existingUser = await db.collection("users").findOne({ email });
    // Check if the user already exists
    if (existingUser) {
      throw new Error("User already exists");
    }
    // Create a new user
    const newUser = {
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
    };
    await db.collection("users").insertOne(newUser);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Database connection failed");
  }
};
