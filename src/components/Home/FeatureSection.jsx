import React, { useEffect, useState } from "react";
import FeatureArticle from "./FeatureArticle";
import { fetchFeaturedArticles } from "../ApiService";

const FeatureSection = () => {
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
  const firstTwoPosts = data.slice(0, 2);

  return (
    <div className="container flex flex-col gap-8 p-4">
      <h2 className="section-heading">Featured Articles</h2>
      <div className="feature-articles flex gap-4">
        {firstTwoPosts.map((item, index) => (
          <FeatureArticle
            key={index}
            id={item.id}
            image="https://img.freepik.com/premium-photo/man-holding-mobile-smart-phone-with-news-screen-newspaper-online-portal-browser_157943-1166.jpg?w=740"
            title={item.title}
            exercept={TrimWord(item.exercepts, 30)}
          ></FeatureArticle>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
