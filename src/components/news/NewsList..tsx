import React, { FC, useEffect } from 'react';
import styles from "./news-list.module.scss"
import NewsCard from "./NewsCard";
import { useQuery } from 'react-query';
import { NewsType } from "../../types/newsType";
import { getFeed } from '../../utils/fetchApi';
import { useMyContext } from "../../context/MainAppContext";

interface Props {
  column: string;
  source: string;
}

const NewsList: FC<Props> = ({column, source}) => {

  const {page, search, setNewsQuantity, limitNews } = useMyContext()

  const { data, isLoading } = useQuery(["news", {sort: "date", page: page, source: source, search: search, limit: limitNews}], getFeed)

  useEffect(() => {
    setNewsQuantity(data && data[1])
  },[data])

  return (
    <>
      {isLoading && (<h1>Загрузка новостей...</h1>)}
      {data && data[0].length < 1 && (<h1>Запрос не найден</h1>)}
      <div className={`${column === "fullwidth" ? styles.list : styles.fullWidthList}`}>
        {data && data[0].map((post: NewsType) => (
          <NewsCard key={`post-${post.title}`} column={column} post={post}/>
        ))}
      </div>
    </>
  );
};

export default NewsList;