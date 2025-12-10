"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

export async function client() {
  return createClient(supabaseUrl, supabaseKey);
}

export async function storageClient() {
  return createClient(supabaseUrl, supabaseKey).storage;
}
