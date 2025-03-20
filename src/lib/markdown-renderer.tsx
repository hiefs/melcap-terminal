"use client";

import { fetchMarkdown } from "@/utils/markdown";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  url: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ url }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetchMarkdown(url).then((data) => {
      setContent(data || "");
    });
  }, [url]);

  return (
    <div className="prose prose-lg mx-auto whitespace-pre-line">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
