import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 6 characters long")
      .trim(),

    email: z
      .string()
      .email("Invalid email format")
      .trim(),

    gender: z
      .string()
      .nonempty("Please select a gender"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .trim(),

    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 6 characters long")
      .trim(),

    
      password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .trim(),
  });
