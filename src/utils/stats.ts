"use server";

import { Stats } from "@/lib/interfaces";
import { client } from "./supabase";

export async function addStats(stats: Stats) {
  const supabase = await client();
  const { error } = await supabase
    .from("stats")
    .insert([
      {
        cooperation: stats.cooperation,
        whimsy: stats.whimsy,
        failure: stats.failure,
      },
    ])
    .select();

  if (error) {
    throw error;
  }
}
