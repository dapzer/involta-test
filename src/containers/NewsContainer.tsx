import React, { FC, useCallback, useEffect, useState } from 'react';
import Filters from "../components/control-menu/Filters";
import NewsList from "../components/news/NewsList.";
import { useMyContext } from "../context/MainAppContext";
import router  from "next/router";
import queryString from "query-string";
import PageSelector from "../components/propagination/PageSelector";

const NewsContainer: FC = () => {
  const { setLimitNews, changePage, page, source,  search } = useMyContext()

  useEffect(() => {
    const query = queryString.stringify({page: page, source: source, search: search})
    router.push(`?${query}`)
  }, [page,search,source])

  const [column, setColumn] = useState("boxed")

  const changeColumns = useCallback((columnQuantity: string, limit: number) => {
    changePage(1)
    setColumn(columnQuantity)
    setLimitNews(limit)
  }, [setColumn])

  return (
    <>
      <Filters column={column} changeColumns={changeColumns} />
      <NewsList column={column}/>
      <PageSelector />
    </>
  );
};

export default NewsContainer;