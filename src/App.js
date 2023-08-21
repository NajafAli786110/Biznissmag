import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./MainSections/Header";
import Footer from "./MainSections/Footer";
import SingleBlogContainer from "./components/BlogPage/BlogComponents/SingleBlogContainer";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<SingleBlogContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
