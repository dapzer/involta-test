import React, { FC, useCallback, useState } from 'react';
import Filters from "../components/control-menu/Filters";
import NewsList from "../components/news/NewsList.";
import { useMyContext } from "../context/MainAppContext";
import { QueryDefaultValue } from "../types/QueryDefaultValue";

const NewsContainer: FC = () => {
  const { setLimitNews, changePage } = useMyContext()

  const [column, setColumn] = useState("boxed")
  const [source, setSource] = useState(`${QueryDefaultValue.source}`)

  const changeColumns = useCallback((columnQuantity: string, limit: number) => {
    changePage(1)
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