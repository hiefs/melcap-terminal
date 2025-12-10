"use server";

import { storageClient } from "./supabase";
import { cache } from "react";

const fetchMarkdownContent = async (url: string) => {
  try {
    const response = await fetch(url, {
      next: { revalidate: 43200 }, // Revalidate every 12 hours
      cache: "force-cache", // Force cache to avoid re-fetching
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching markdown file:", error);
    return "";
  }
};

export const fetchMarkdown = cache(async (filename: string) => {
  const supabase = await storageClient();
  const file = await supabase.from("markdown").getPublicUrl(filename);
  const url = file.data.publicUrl;
  return fetchMarkdownContent(url);
});
