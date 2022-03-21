import React, { FC, useCallback, useState } from 'react';
import Filters from "../components/control-menu/Filters";
import NewsList from "../components/news/NewsList.";
import { useMyContext } from "../context/MyContext";

const NewsContainer: FC = () => {
  const { setLimitNews } = useMyContext()

  const [column, setColumn] = useState("boxed")
  const [source, setSource] = useState("All")

  const changeColumns = useCallback((columnQuantity: string, limit: number) => {
    setColumn(columnQuantity)
    setLimitNews(limit)
  }, [setColumn])

  const changeFilter = (filter: string) => {
    setSource(filter)
  }

  return (
    <>
      <Filters column={column} setSource={changeFilter} source={source} changeColumns={changeColumns} />
      <NewsList column={column} source={source} />
    </>
  );
};

export default NewsContainer;