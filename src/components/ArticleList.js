import React from "react";
import Article from "./Article";

function ArticleList() {
  const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
