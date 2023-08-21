import React from "react";
import "./HomeCompo.css";

const HeroSection = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* First Container */}
        <div className="w-full md:w-7/10 flex flex-col gap-8">
          {/* Upper Container */}
          <div className="flex justify-center md:justify-start">
            <img
              className="hero-image"
              src="https://img.freepik.com/free-photo/graphic-concept-with-blocks-laptop_23-2148950390.jpg?w=2000&t=st=1692130689~exp=1692131289~hmac=22ed4ec49e7561dd5ad4bc1389652f5ae77fc317f5cc3af4274bcdb710456697"
              alt="Image"
            />
          </div>

          {/* Bottom Container */}
          <div className="flex flex-col gap-4">
            <h2 className="heading-2">Former FTX CEO Sam Bankman-Fried’s bail over revealing the diaries</h2>
            <p className="paragraph">
            The decision came after allegations that Bankman-Fried leaked the diary of Caroline Ellison, the former CEO of FTX’s investment-arm Alameda Research, to the New York Times. Kaplan announced the decision in a federal court in Manhattan on Friday afternoon. The decision came after allegations that Bankman-Fried leaked the diary of Caroline Ellison, the former CEO of FTX’s investment-arm Alameda Research, to the New York Times. Kaplan announced the decision in a federal court in Manhattan on Friday afternoon.
            </p>
            <button className="button-for-web text-left">Read More</button>
          </div>
        </div>

        {/* Second Container */}
        <div className="w-2/4 md:w-3/10">
          <h2 className="top-category red-color">Top Categories</h2>
          <ul className="mt-7 space-y-2 flex flex-col gap-5 list-disc list-inside">
            <li className="category-list">Navigating Failures</li>
            <li className="category-list">Risk-Taking Strategies</li>
            <li className="category-list">Building Resilience</li>
            <li className="category-list">Adapting to Market Trends</li>
            <li className="category-list">Innovation Mindset</li>
            <li className="category-list">Building a Strong Brand</li>
            <li className="category-list">Networking & Relationship</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
