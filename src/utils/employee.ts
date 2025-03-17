"use server";

import { Employee, EmployeeLogin } from "@/lib/interfaces.js";
import client from "./supabase";

export async function createEmployee(employee: Employee) {
  const { error } = await client
    .from("employee")
    .insert([
      {
        name: employee.name,
        race: employee.race,
        employee_id: employee.employee_id,
        age: employee.age,
        specialty: employee.specialty,
        position: employee.position,
        pin: employee.pin,
        banned: employee.banned,
      },
    ])
    .select();

  if (error) {
    throw error;
  }
}

export async function loginEmployee(employee: EmployeeLogin) {
  const { data, error } = await client
    .from("employee")
    .select("*")
    .eq("employee_id", employee.employee_id)
    .eq("pin", employee.pin);

  if (error) {
    throw error;
  }

  if (data.length === 0) {
    return null;
  } else {
    return data[0];
  }
}

export async function checkEmployeeId(employeeId: string) {
  const { data, error } = await client
    .from("employee")
    .select("*")
    .eq("employee_id", employeeId);

  if (error) {
    throw error;
  }

  if (data.length === 0) {
    return true;
  } else {
    return false;
  }
}
