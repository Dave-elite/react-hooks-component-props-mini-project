import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
  <Header 
  name="Underreacted"
  />
  <About 
  image="logo"

  about="A blog about learning React"
  />
  <ArticleList />
    </div>
  );
}

export default App;
