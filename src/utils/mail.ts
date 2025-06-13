"use server";

import { Mail } from "@/lib/interfaces";
import { client } from "./supabase";

export async function getMail(): Promise<Mail[]> {
  const supabase = await client();
  const { data, error } = await supabase.from("mail").select("*");

  if (error) {
    throw error;
  }

  if (!data) {
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    date: item.date,
    sender: item.sender,
    subject: item.subject,
    message: item.message,
  })) as Mail[];
}
