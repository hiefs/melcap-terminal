"use server";

import { Employee } from "@/lib/definitions.js";
import client from "./supabase";

export async function createEmployee(employee: Employee) {
  const { error } = await client
    .from("employee")
    .insert([
      {
        name: employee.name,
        race: employee.race,
        age: employee.age,
        specialty: employee.specialty,
        pin: employee.pin,
        banned: employee.banned,
      },
    ])
    .select();

  if (error) {
    throw error;
  }
  return "Employee created successfully";
}
