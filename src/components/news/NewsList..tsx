import React, { FC } from 'react';
import styles from "./news-list.module.scss"
import NewsCard from "./NewsCard";

interface Props{
  column: string;
}

const NewsList: FC<Props> = ({column}) => {
  return (
    <div className={`${column == "big" ? styles.list : styles.fullWidthList}`}>

      <NewsCard column={column} />
      <NewsCard column={column} />
      <NewsCard column={column} />
      <NewsCard column={column} />
    </div>
  );
};

export default NewsList;