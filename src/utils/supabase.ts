import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const client = createClient(supabaseUrl, supabaseKey);

const storageClient = createClient(supabaseUrl, supabaseKey).storage;

export { client, storageClient };
