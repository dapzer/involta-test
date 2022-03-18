import React, { FC, useCallback, useState } from 'react';
import Filters from "../components/control-menu/Filters";
import NewsList from "../components/news/NewsList.";

const NewsContainer: FC = () => {
  const [column, setColumn] = useState("small")
  const [source, setSource] = useState("All")

  const changeColumns = useCallback((columnQantity: string) => {
    setColumn(columnQantity)
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