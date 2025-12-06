import React from "react";

interface Articleprops {
  title: string;
  children?: React.ReactNode;
}

const Article: React.FC<Articleprops> = (props) => {
  const { title, children } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Article;
