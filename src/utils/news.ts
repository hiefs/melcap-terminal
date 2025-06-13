"use server";

import { News } from "@/lib/interfaces";
import { client } from "./supabase";

export async function getNews(): Promise<News[]> {
  const supabase = await client();
  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    throw error;
  }

  if (!data) {
    return [];
  }

  return data.map((item) => ({
    date_posted: item.date_posted,
    network: item.network,
    title: item.title,
    author: item.author,
    article: item.article,
    img: item.img,
  })) as News[];
}
