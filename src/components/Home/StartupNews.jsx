import React, { useEffect, useState } from "react";
import StartupArticle from "./StartupArticle";
import { fetchFeaturedArticles } from "../ApiService";

const StartupNews = () => {
  const [data, setData] = useState([]);
  const TrimWord = (exercepts, maxWords) => {
    const words = exercepts.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
  };
  useEffect(() => {
    async function fetchData() {
      const extractedData = await fetchFeaturedArticles();
      setData(extractedData);
    }

    fetchData();
  }, []);

  // Extract the first two posts
  const firstTwoPosts = data.slice(0, 6);

  return (
    <div className="container flex flex-col gap-8 p-4">
      <h2 className="section-heading">StartUp News</h2>
      <div className="grid md:grid-col-2 grid-cols-3 gap-4">
        {firstTwoPosts.map((i, index) => (
          <StartupArticle
            key={index}
            imgURL="https://img.freepik.com/premium-vector/flat-template-with-megaphone-people-breaking-news-flyer-design-breaking-news-concept_194782-224.jpg?w=740"
            title={TrimWord(i.title, 3)}
            exercept={TrimWord(i.exercepts, 30)}
            id={i.id}
          ></StartupArticle>
        ))}
      </div>
    </div>
  );
};

export default StartupNews;
