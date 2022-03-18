import React, { FC } from 'react';
import styles from "./news-list.module.scss"
import NewsCard from "./NewsCard";
import { MosNewsType } from "../../types/mosNewsType";
import { useQuery } from 'react-query';
import axios from "axios";
import { NewsType } from "../../types/newsType";
import { getFeed } from '../../api/fetchApi';

interface Props{
  column: string;
  source: string;
}

const NewsList: FC<Props> = ({column, source}) => {

  const { data } = useQuery(['posts', {source: source}], getFeed)

  console.log(data);


  return (
    <div className={`${column == "big" ? styles.list : styles.fullWidthList}`}>

      {data && data.map((post: NewsType, id) => (
        <NewsCard column={column} post={post} />
      ))}

    </div>
  );
};

export default NewsList;