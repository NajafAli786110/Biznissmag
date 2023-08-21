import React, { useEffect, useState } from "react";
import CaseArticles from "./CaseArticles";
import { fetchFeaturedArticles } from "../ApiService";

const CaseStudy = () => {
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
      <h2 className="section-heading">Startup News</h2>
      <div className="grid md:grid-col-2 grid-cols-2 gap-8">
        {firstTwoPosts.map((i, index) => (
          <CaseArticles
            key={index}
            imgURL="https://img.freepik.com/free-photo/two-businessmen-sitting-couch_53876-26181.jpg?w=740&t=st=1692287299~exp=1692287899~hmac=6cde5006cc44ba045e4f1873c71c66c003a012ae7a549cd833d69a306c8f79ff"
            title={TrimWord(i.title, 3)}
            exercept={TrimWord(i.exercepts, 30)}
            id={i.id}
          ></CaseArticles>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
