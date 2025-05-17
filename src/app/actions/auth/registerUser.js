"use server";
import dbConnect, { dbCollections } from "@/lib/dbConnect";
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
    const existingUser = await dbConnect(dbCollections.users).findOne({
      email,
    });
    // Check if the user already exists
    if (existingUser) {
      throw new Error("User already exists");
    }
    const newUser = {
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
    };
    const user = await dbConnect(dbCollections.users).insertOne(newUser);
    if (!user) {
      throw new Error("User registration failed");
    }
    return user;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Database connection failed");
  }
};
