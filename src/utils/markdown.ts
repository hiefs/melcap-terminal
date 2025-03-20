"use server";

export async function fetchMarkdown(url: string) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching markdown file:", error);
  }
}
