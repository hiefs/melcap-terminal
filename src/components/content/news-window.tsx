import { useAppSelector } from "@/lib/hooks";
import { News } from "@/lib/interfaces";
import Image from "next/image";
import { useState } from "react";

interface NewsListProps {
  title: string;
  author: string;
}

const NewsList: React.FC<NewsListProps> = ({ title, author }) => {
  return (
    <div className="bg-black w-full h-18 flex flex-col p-2 justify-center border-2 hover:bg-neutral-800 ">
      <p className="text-base overflow-hidden whitespace-nowrap truncate w-full">
        {title}
      </p>
      <p className="text-xs">{author}</p>
    </div>
  );
};

export const NewsWindow = () => {
  const [selectedArticle, setSelectedArticle] = useState<News>();
  const news = useAppSelector((state) => state.news.news);
  return (
    <>
      <div className="w-full flex flex-col h-1/2 overflow-auto gap-2">
        {news.map((tile, index) => (
          <div key={index} onClick={() => setSelectedArticle(tile)}>
            <NewsList title={tile.title} author={tile.author} />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col h-1/2 overflow-auto border-t-2 border-dashed overflow-auto">
        {selectedArticle && (
          <div className="mt-8">
            <p className="text-center mb-8">{selectedArticle.network}</p>
            {selectedArticle.img && (
              <Image
                className="mx-auto block"
                src={selectedArticle.img}
                alt="news"
                width={600}
                height={200}
              />
            )}
            <p className="text-lg">{selectedArticle.title}</p>
            <p className="text-sm">By {selectedArticle.author}</p>
            <p className="mb-4 text-xs">Posted</p>

            {selectedArticle.article.split("\\n").map((line, index) => {
              return (
                <p className="mb-4" key={index}>
                  {line}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
