"use client";

import { fetchMarkdown } from "@/utils/markdown";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  filename: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filename }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetchMarkdown(filename).then((data) => {
      setContent(data || "");
    });
  }, [filename]);

  return (
    <div className="prose prose-lg mx-auto whitespace-pre-line">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
