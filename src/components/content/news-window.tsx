import { useAppSelector } from "@/lib/hooks";
import { News } from "@/lib/interfaces";
import MarkdownRenderer from "@/lib/markdown-renderer";
import Image from "next/image";
import { useState } from "react";

interface NewsListProps {
  title: string;
  author: string;
  selected: boolean;
}

const NewsList: React.FC<NewsListProps> = ({ title, author, selected }) => {
  return (
    <div
      className={
        "w-full h-18 flex flex-col justify-center border-2 p-2 " +
        `${
          selected
            ? "bg-neutral-300 text-black"
            : "bg-black hover:bg-neutral-800 "
        }`
      }
    >
      <p className="text-base overflow-hidden whitespace-nowrap truncate w-full">
        {title}
      </p>
      <p className="text-xs">By {author}</p>
    </div>
  );
};

export const NewsWindow = () => {
  const [selectedArticle, setSelectedArticle] = useState<News | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const news = useAppSelector((state) => state.news.news);

  const handleTileClick = (tile: News, index: number) => {
    if (selectedIndex === index) {
      setSelectedArticle(null);
      setSelectedIndex(null);
    } else {
      setSelectedArticle(tile);
      setSelectedIndex(index);
    }
  };

  return (
    <>
      {news.length === 0 && (
        <div className="w-full flex flex-col h-full justify-center items-center">
          <p className="mb-4 ">
            <span>No articles available.</span>
          </p>
        </div>
      )}
      {news.length > 0 && (
        <>
          <div className="w-full flex flex-col h-1/3 overflow-auto gap-2">
            {news.map((tile, index) => (
              <div key={index} onClick={() => handleTileClick(tile, index)}>
                <NewsList
                  title={tile.title}
                  author={tile.author}
                  selected={selectedIndex === index}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col h-2/3 overflow-auto border-t-2 border-dashed">
            {selectedArticle && (
              <div className="mt-2">
                {selectedArticle.img && (
                  <Image
                    className="mx-auto block"
                    src={selectedArticle.img}
                    alt="news"
                    width={600}
                    height={200}
                  />
                )}
                <MarkdownRenderer filename={selectedArticle.article} />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
