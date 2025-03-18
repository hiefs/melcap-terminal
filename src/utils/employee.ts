"use server";

import { Employee, EmployeeLogin, EmployeeRegister } from "@/lib/interfaces.js";
import client from "./supabase";
import { User } from "@/lib/features/user-reducer";

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

export async function getEmployees(): Promise<EmployeeRegister[]> {
  const { data, error } = await client
    .from("employee")
    .select("employee_id, name, race, age, specialty, position, pin, banned");

  if (error) {
    throw error;
  }

  if (!data) {
    return [];
  }

  return data.map((item) => ({
    name: item.name,
    specialty: item.specialty,
    position: item.position,
    unemployed: item.banned,
  })) as EmployeeRegister[];
}

export async function matchEmployee(employee: EmployeeLogin) {
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
    const user = data[0];
    const employee: User = {
      eId: user.employee_id,
      name: user.name,
      department: user.specialty,
      title: user.position,
      race: user.race,
      age: user.age,
      enrolledDate: user.created_at,
      unemployed: user.banned,
    };
    return employee;
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
