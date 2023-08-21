import React, { useEffect, useState } from "react";
import "./HomeCompo.css";
import InsightsArticle from "./InsightsArticle";
import { fetchFeaturedArticles } from "../ApiService";

const InsightsSection = () => {
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

  return (
    <div className="container flex flex-col gap-8 p-4">
      <h2 className="section-heading">Entrepreneurail Insights</h2>
      <div className="grid md:grid-col-2 grid-cols-4 gap-10">
        {data.map((i, index) => (
          <InsightsArticle
            key={index}
            title={i.title}
            exercepts={TrimWord(i.exercepts, 30)}
            id={i.id}
          ></InsightsArticle>
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;
