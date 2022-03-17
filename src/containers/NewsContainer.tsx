import React, { FC, useCallback, useState } from 'react';
import Filters from "../components/control-menu/Filters";
import NewsList from "../components/news/NewsList.";

const NewsContainer: FC = () => {
  const [column, setColumn] = useState("small")

  const changeColumns = useCallback((columnQantity: string) => {
    setColumn(columnQantity)
  }, [setColumn])

  return (
    <>
      <Filters column={column} changeColumns={changeColumns} />
      <NewsList column={column} />
    </>
  );
};

export default NewsContainer;