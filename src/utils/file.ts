"use server";

import { File } from "@/lib/interfaces";
import { client } from "./supabase";

export async function getFiles(): Promise<File[]> {
  const supabase = await client();
  const { data, error } = await supabase.from("files").select("*");

  if (error) {
    throw error;
  }

  if (!data) {
    return [];
  }

  return data.map((item) => ({
    title: item.title,
    img: item.img,
  })) as File[];
}
